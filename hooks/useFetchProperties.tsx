import { useState, useEffect } from "react";
import { Property } from "@/types/types";
import { mockProperties } from "@/data/mockProperties";

export const useFetchProperties = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  // Load mock data immediately
   useEffect(() => {
    setProperties(mockProperties);
    setLoading(false);
  }, []);

  // useEffect(() => {
  //   const fetchProperties = async () => {
  //     try {
  //       const res = await fetch(
  //          "https://agents.propertygenie.com.my/.netlify/functions/properties-mock",
  //         {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify({
  //             page: 1,
  //             limit: 10,
  //           }),
  //         }
  //       );

  //       const data = await res.json();
  //       console.log("POST response:", data);
        
  //       // Expecting data as an array of Property objects
  //       setProperties(data.properties || []); 
  //     } catch (err) {
  //       setError("Failed to fetch properties");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchProperties();
  // }, []);

  // console.log(properties);
  return { properties, loading, error };
};


function dispatch(arg0: { type: string; payload: Property[]; }) {
  throw new Error("Function not implemented.");
}

