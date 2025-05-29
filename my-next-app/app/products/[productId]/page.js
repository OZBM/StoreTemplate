import { mockProducts } from "../../mock-products"; // Adjusted path for mockProducts

export default function ProductDetailPage({ params }) {
  const { productId } = params;

  // Find the product by ID. Ensure type consistency for comparison.
  const product = mockProducts.find((p) => String(p.id) === String(productId));

  if (!product) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-50">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Product Not Found
          </h1>
          <p className="text-gray-600">
            Sorry, we couldn't find the product you're looking for.
          </p>
          {/* Optional: Add a link to go back to the products page */}
          {/* <a href="/products" className="mt-4 inline-block text-indigo-600 hover:text-indigo-800">
            &larr; Back to all products
          </a> */}
        </div>
      </main>
    );
  }

  const formattedPrice = `$${product.price.toFixed(2)}`;

  return (
    <main className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="md:flex">
          {/* Image Column */}
          <div className="md:w-1/2">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-64 md:h-auto object-cover md:rounded-l-lg"
            />
          </div>

          {/* Details Column */}
          <div className="md:w-1/2 p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-sm font-semibold text-indigo-600 uppercase mb-1">
                {product.category}
              </h2>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
                {product.name}
              </h1>
              <p className="text-gray-600 text-base mb-6">
                {product.description}
              </p>
              <p className="text-3xl font-bold text-gray-900 mb-6">
                {formattedPrice}
              </p>
            </div>
            <button
              type="button"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
