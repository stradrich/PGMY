import { usePropertyContext } from "@/context/PropertyContext"

export default function SearchFilters() {
  const { filters, setFilters, availableStates, availablePropertyTypes } = usePropertyContext()

  const handlePropertyTypeToggle = (type: string) => {
    const current = filters.propertyTypes
    const updated = current.includes(type) ? current.filter((t) => t !== type) : [...current, type]
    setFilters({ ...filters, propertyTypes: updated })
  }

  return (
    <div className="mb-6 flex flex-wrap gap-3">
      <input
        type="text"
        placeholder="Search by city or state..."
        value={filters.searchLocation}
        onChange={(e) => setFilters({ ...filters, searchLocation: e.target.value })}
        className="flex-1 min-w-[200px] rounded-lg border border-gray-300 px-4 py-2"
      />
      <select value={filters.selectedState} onChange={(e) => setFilters({ ...filters, selectedState: e.target.value })}>
        <option value="">All States</option>
        {availableStates.map((state) => (
          <option key={state} value={state}>{state}</option>
        ))}
      </select>
      <input type="number" placeholder="Min Price" value={filters.minPrice} onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })} />
      <input type="number" placeholder="Max Price" value={filters.maxPrice} onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })} />
      <div className="flex flex-wrap gap-2 mt-2">
        {availablePropertyTypes.map((type) => (
          <button key={type} onClick={() => handlePropertyTypeToggle(type)}
            className={`rounded-full px-4 py-2 ${filters.propertyTypes.includes(type) ? "bg-blue-600 text-white" : "bg-gray-100"}`}>
            {type}
          </button>
        ))}
      </div>
    </div>
  )
}
