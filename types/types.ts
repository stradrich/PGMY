export type Property = {
  id: number;
  title: string;
  price: number;
  bedrooms?: number;
  bathrooms?: number;
  image?: string;
  location?: {
    city?: string;
    state?: string;
  };
  property_type?: string;
  created_at?: string;
  [key: string]: any;
};


export type FilterState = {
  sortBy: "default" | "price-low" | "price-high"
  minPrice: string
  maxPrice: string
  propertyTypes: string[]
  searchLocation: string
  selectedState: string
}