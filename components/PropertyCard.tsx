import React from "react";
import { Property } from "../types/types";
import { formatPrice } from "../utils/formatPrice";

type PropertyCardProps = {
  property: Property;
};

export const PLACEHOLDER_IMAGES= [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLB4-wxF8cCQcy8qmOWSHAWggu8FHfwb1S2g&s",
  "https://www.inh.com.au/Franchise/FranchiseAssets/adbd0f90-086e-4e1a-950c-85a326600be7/News/f34323e4-c852-44ca-a114-ef0be7483787.jpg",
  "https://i0.wp.com/www.thisistheplace.org/wp-content/uploads/2024/07/Fairbanks-Home.jpeg",
  "https://media.istockphoto.com/id/155133397/photo/new-luxury-home-with-tropical-garden.jpg?s=612x612&w=0&k=20&c=jxx8ZZ_ZZiIb7vqtF2VcH3MdZgi_6vqKsDS77CFAcEk=",
  "https://images.techeblog.com/wp-content/uploads/2013/12/09152210/transparent-house-japan.jpg",
  "https://www.freemalaysiatoday.com/cdn-cgi/image/width=3840,quality=85,format=auto,fit=scale-down,metadata=none,dpr=1,onerror=redirect/https://media.freemalaysiatoday.com/wp-content/uploads/2025/09/63e96627-perumahan-baru-resize-fmt-050925.webp",
  "https://media.istockphoto.com/id/963136566/photo/colorful-peranakan-house-at-singapore.jpg?s=612x612&w=0&k=20&c=uAfiq_VC_ejnv46OftA_aEtlsWuMe7hAKc42WELN16o=",
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/517559514.jpg?k=dd470766b7e75f1e1a5c0113337be3d794488bd5ef768aadd71c7555041e643c&o=",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1qolsMBexlai8zhFLgTiXogfeI4-qKaX2bg&s",
  "https://www.designboom.com/wp-content/uploads/2020/01/MUJI-plain-house-yo-no-Ie-designboom-02.jpg",
  "https://media3.architecturemedia.net/site_media/media/cache/8d/a1/8da13550dfde3b45580a02f9785db70f.jpg",
  "https://www.yankodesign.com/images/design_news/2025/05/the-muji-muji-5-5-house-is-a-modular-prefab-home-crafted-from-repurposed-classic-muji-products/muji_yanko_design_02.jpg",
  "https://architizer-prod.imgix.net/media/14710353416741-Minimalist-House.jpeg?fit=max&w=1680&q=60&auto=format&auto=compress&cs=strip",
]

  export const getRandomPlaceholder = (): string => {
  const index = Math.floor(Math.random() * PLACEHOLDER_IMAGES.length);
  return PLACEHOLDER_IMAGES[index];
};

export const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  // const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  //   const img = e.currentTarget;
  //   if (img.src.includes(PLACEHOLDER_IMG)) return; // ✅ prevent infinite loop
  //   img.src = PLACEHOLDER_IMG ;
  // };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  const img = e.currentTarget;
  if (PLACEHOLDER_IMAGES.includes(img.src)) return; // prevent loop
  img.src = getRandomPlaceholder();
};

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <img
        // src={property.image || PLACEHOLDER_IMG }
        src={property.image || getRandomPlaceholder()}
        alt={property.title}
        className="w-full h-48 object-cover"
        onError={handleImageError}
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{property.title}</h2>
        <p className="text-gray-600">{formatPrice(property.price)}</p>
        <p className="text-gray-500 text-sm">
          {property.bedrooms ?? "-"} Beds • {property.bathrooms ?? "-"} Baths
        </p>
      </div>
    </div>
  );
};
