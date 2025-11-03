import { Property } from "../types/types";

type Filters = {
  priceRange: [number, number];
  bedrooms?: number;
  bathrooms?: number;
  [key: string]: any;
};

export const filterProperties = (properties: Property[], filters: Filters): Property[] => {
  return properties.filter((property) => {
    const inPriceRange = property.price >= filters.priceRange[0] && property.price <= filters.priceRange[1];
    const bedroomsMatch = filters.bedrooms ? property.bedrooms === filters.bedrooms : true;
    const bathroomsMatch = filters.bathrooms ? property.bathrooms === filters.bathrooms : true;

    return inPriceRange && bedroomsMatch && bathroomsMatch;
  });
};
