import { usePropertyContext } from "@/context/PropertyContext"
import { useRef, useEffect } from "react"
import { PropertyCard } from "../components/PropertyCard"

export default function PropertyGrid() {
  const { currentProperties, hasMore, loadMoreProperties, isLoadingMore, loading, error,  } = usePropertyContext()
  const observerTarget = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!observerTarget.current) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) loadMoreProperties()
      },
      { threshold: 0.1 }
    )
    observer.observe(observerTarget.current)
    return () => observer.disconnect()
  }, [loadMoreProperties])

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>
  if (currentProperties.length === 0) return <p>No properties found</p>

return (
  <>
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {currentProperties.map((property, index) => (
        <PropertyCard key={`${property.id}-${index}`} property={property} />
      ))}
    </div>

    {hasMore ? (
      <div ref={observerTarget} className="mt-8 text-center text-gray-600">
        {isLoadingMore ? "Loading more properties..." : "Scroll for more results"}
      </div>
    ) : (
      currentProperties.length > 12 && (
        <div className="mt-8 text-center text-sm text-gray-600">
          You've reached the end of the results
        </div>
      )
    )}
  </>
)
}
