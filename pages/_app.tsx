import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { PropertyProvider } from "@/context/PropertyContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PropertyProvider>
      <main className="min-h-screen bg-gray-50 text-gray-900">
        <Component {...pageProps} />
      </main>
    </PropertyProvider>
  );
}
