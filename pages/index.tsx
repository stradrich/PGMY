import Head from "next/head"
import Header from "@/components/Header"
import { Sidebar } from "@/components/Sidebar"
import SearchFilters from "@/components/SearchFilters"
import PropertyGrid from "../components/PropertyGrid"
import { PropertyProvider } from "@/context/PropertyContext"

export default function Home() {
  return (
    <PropertyProvider>
      <Head>
        <title>Property Genie</title>
      </Head>

      <Header />

      <main className="min-h-screen bg-gray-50 py-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            <SearchFilters />
            <PropertyGrid />
          </div>
          <Sidebar />
        </div>
      </main>
    </PropertyProvider>
  )
}
