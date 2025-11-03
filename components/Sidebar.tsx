import React from "react";

interface Location {
  name: string;
  count: string;
}

export const Sidebar: React.FC = () => {
  const popularLocations: Location[] = [
    { name: "Property for Sale in Selangor", count: "12,345" },
    { name: "Property for Sale in Johor", count: "8,234" },
    { name: "Property for Sale in Kuala Lumpur", count: "6,789" },
    { name: "Property for Sale in Penang", count: "4,567" },
    { name: "Property for Sale in Perak", count: "3,456" },
  ];

  const popularTypes: string[] = [
    "Condo for Sale",
    "Bungalow for Sale",
    "1-Storey Terrace for Sale",
    "Apartment for Sale",
    "Residential Land for Sale",
  ];

  return (
    <aside className="space-y-6">
      {/* Popular Locations */}
      <div className="rounded-lg bg-white p-6 shadow-md">
        <div className="mb-4 flex items-center gap-2">
          <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          <h3 className="text-lg font-semibold text-gray-900">Popular Locations</h3>
        </div>
        <div className="space-y-3">
          <div className="mb-3 text-sm font-semibold text-gray-700">TOP STATES</div>
          {popularLocations.map((location) => (
            <a
              key={location.name}
              href="#"
              className="flex items-center justify-between text-sm text-blue-600 hover:underline"
            >
              <span>{location.name}</span>
            </a>
          ))}
          <button className="text-sm font-medium text-blue-600 hover:underline">View More</button>
        </div>
      </div>

      {/* Popular Types */}
      <div className="rounded-lg bg-white p-6 shadow-md">
        <div className="mb-4 flex items-center gap-2">
          <svg className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
          <h3 className="text-lg font-semibold text-gray-900">Popular Types</h3>
        </div>
        <div className="space-y-3">
          {popularTypes.map((type) => (
            <a
              key={type}
              href="#"
              className="flex items-center gap-2 text-sm text-blue-600 hover:underline"
            >
              <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{type}</span>
            </a>
          ))}
          <button className="text-sm font-medium text-blue-600 hover:underline">View More</button>
        </div>
      </div>

      {/* Helpful Resources */}
      <div className="rounded-lg bg-white p-6 shadow-md">
        <div className="mb-4 flex items-center gap-2">
          <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
          <h3 className="text-lg font-semibold text-gray-900">Helpful Resources</h3>
        </div>
        <div className="space-y-3">
          <a href="#" className="block text-sm text-blue-600 hover:underline">
            Home Affordability Guides & Tools
          </a>
          <a href="#" className="block text-sm text-blue-600 hover:underline">
            Mortgage Calculator
          </a>
          <a href="#" className="block text-sm text-blue-600 hover:underline">
            Market Analytics
          </a>
          <a href="#" className="block text-sm text-blue-600 hover:underline">
            Find a Trusted Agent
          </a>
        </div>
      </div>
    </aside>
  );
};
