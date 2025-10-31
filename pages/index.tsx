import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Property Genie</title>
        <meta name="description" content="Find your perfect property with smart filters and instant results." />
      </Head>

      <main className="min-h-screen bg-gray-50 py-10">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Property Genie</h1>
          <p className="text-gray-600 mb-10">
            Smart property search with filters, sorting, and infinite scrolling.
          </p>

          {/* We'll build the property list component here next */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">Property Card</div>
          </div>
        </div>
      </main>
    </>
  );
}
