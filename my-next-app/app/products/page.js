import { mockProducts } from "../mock-products";
import ProductCard from "../components/ProductCard";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-10 sm:mb-12">
          Our Gadgets
        </h1>
        {mockProducts && mockProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {mockProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500">
            <p className="text-xl">No products available at the moment.</p>
            <p>Please check back later!</p>
          </div>
        )}
      </div>
    </main>
  );
}
