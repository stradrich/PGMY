"use client"

import { createContext, useContext, useState, useEffect, useCallback } from "react"
import type { Property, FilterState } from "@/types/types"

type PropertyContextType = {
  properties: Property[]
  filteredProperties: Property[]
  currentProperties: Property[]
  filters: FilterState
  setFilters: (filters: FilterState) => void
  loadMoreProperties: () => void
  hasMore: boolean
  loading: boolean
  error: string | null
  viewMode: "grid" | "list"
  setViewMode: (mode: "grid" | "list") => void
  availableStates: string[]
  availablePropertyTypes: string[]
  isLoadingMore: boolean 
}

const PropertyContext = createContext<PropertyContextType | undefined>(undefined)

export const usePropertyContext = () => {
  const context = useContext(PropertyContext)
  if (!context) throw new Error("usePropertyContext must be used within PropertyProvider")
  return context
}

export const PropertyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [properties, setProperties] = useState<Property[]>([])
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([])
  const [filters, setFilters] = useState<FilterState>({
    sortBy: "default",
    minPrice: "",
    maxPrice: "",
    propertyTypes: [],
    searchLocation: "",
    selectedState: "",
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [displayedCount, setDisplayedCount] = useState(12)
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const propertiesPerLoad = 12

      // Load properties from mock data
  // useEffect(() => {
  //   const loadProperties = async () => {
  //     try {
  //       setLoading(true)
  //       // simulate async fetch
  //       await new Promise((resolve) => setTimeout(resolve, 300))
  //       setProperties(mockProperties)
  //       setError(null)
  //     } catch (err) {
  //       setError("Failed to load properties.")
  //       console.error(err)
  //     } finally {
  //       setLoading(false)
  //     }
  //   }
  //   loadProperties()
  // }, []) 

  // 🟢 Fetch properties from live API + all paginated properties
  useEffect(() => {
    const fetchAllProperties = async () => {
      try {
        setLoading(true)
        setError(null)

        // Fetch first page
        const firstRes = await fetch("https://agents.propertygenie.com.my/.netlify/functions/properties-mock", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ page: 1, limit: 20 }),
        })

        const firstData = await firstRes.json()
        const totalPages = firstData._meta?.pageCount || 1

        // 🧠 Collect all requests for remaining pages
        const requests = []
        for (let page = 2; page <= totalPages; page++) {
          requests.push(
            fetch("https://agents.propertygenie.com.my/.netlify/functions/properties-mock", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ page, limit: 20 }),
            }).then((res) => res.json())
          )
        }

        // Wait for all pages
        const results = await Promise.all(requests)
        const allItems = [firstData, ...results].flatMap((r) => r.items ?? [])

        // console.log("ALL ITEMS:", allItems);
        
        // console.log("✅ Total properties fetched:", allItems.length)

        // 🧩 Map API items → internal Property type
        const normalized: Property[] = allItems.map((item: any) => ({
          id: item.id,
          title: item.name,
          price: item.price,
          bedrooms: item.bedRooms ?? item.bedRooms ?? 0,
          bathrooms: item.bathRooms ?? item.bathRooms ?? 0,
          image: item.image,
          property_type: item.type,
          created_at: item.createdAt,
          location: {
            city: item.city,
            state: item.state,
          },
          ...item, // keep extra API fields just in case
        }))

        setProperties(normalized)
      } catch (error) {
        console.error("❌ Failed to fetch properties:", error)
        setError("Failed to load properties.")
      } finally {
        setLoading(false)
      }
    }

    fetchAllProperties()
  }, [])

  // 🧩 Filter logic
  useEffect(() => {
    applyFilters()
  }, [properties, filters])

  const loadMoreProperties = useCallback(() => {
    setIsLoadingMore(true)
    setTimeout(() => {
      setDisplayedCount((prev) => Math.min(prev + propertiesPerLoad, filteredProperties.length))
      setIsLoadingMore(false)
    }, 500)
  }, [filteredProperties.length])

  const applyFilters = () => {
    let filtered = [...properties]

    if (filters.minPrice) filtered = filtered.filter((p) => p.price >= Number(filters.minPrice))
    if (filters.maxPrice) filtered = filtered.filter((p) => p.price <= Number(filters.maxPrice))
    if (filters.propertyTypes.length > 0)
      filtered = filtered.filter(
        (p) => p.location?.state?.toLowerCase?.() === filters.selectedState.toLowerCase()
      )

    if (filters.selectedState)
      filtered = filtered.filter(
        (p) => p.location?.state?.toLowerCase() === filters.selectedState.toLowerCase()
      )

    if (filters.searchLocation) {
      const term = filters.searchLocation.toLowerCase()
      filtered = filtered.filter(
        (p) =>
          p.location?.city?.toLowerCase().includes(term) ||
          p.location?.state?.toLowerCase().includes(term)
      )
    }

    switch (filters.sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        filtered.sort((a, b) => b.price - a.price)
        break
      default:
        filtered.sort(
          (a, b) =>
            new Date(b.created_at || "").getTime() -
            new Date(a.created_at || "").getTime()
        )
        break
    }

    setFilteredProperties(filtered)
    setDisplayedCount(12)
  }

  const currentProperties = filteredProperties.slice(0, displayedCount)
  const hasMore = displayedCount < filteredProperties.length

  // const availableStates = Array.from(
  //   new Set(properties.map((p) => p.location?.state).filter(Boolean))
  // )

  // const availablePropertyTypes = Array.from(
  //   new Set(properties.map((p) => p.property_type).filter(Boolean))
  // )

  const availableStates = Array.from(
    new Set(
      properties
        .map((p) => p.location?.state)
        .filter((state): state is string => !!state)
    )
  )

  const availablePropertyTypes = Array.from(
    new Set(
      properties
        .map((p) => p.property_type)
        .filter((type): type is string => !!type)
    )
  )

  return (
    <PropertyContext.Provider
      value={{
        properties,
        filteredProperties,
        currentProperties,
        filters,
        setFilters,
        loadMoreProperties,
        hasMore,
        loading,
        error,
        viewMode,
        setViewMode,
        availableStates,
        availablePropertyTypes,
        isLoadingMore
      }}
    >
      {children}
    </PropertyContext.Provider>
  )
}
