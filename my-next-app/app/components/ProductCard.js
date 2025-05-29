export default function ProductCard({ product }) {
  if (!product) {
    return null; // Or some placeholder/error state
  }

  const formattedPrice = `$${product.price.toFixed(2)}`;

  return (
    <div className="border rounded-lg shadow-lg overflow-hidden bg-white flex flex-col">
      <div className="relative w-full h-48 sm:h-56">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 flex-grow">
        <h3 className="text-lg font-semibold text-gray-800 mb-1 truncate" title={product.name}>
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 mb-2">
          Category: {product.category}
        </p>
        <p className="text-gray-800 font-bold text-xl mb-3">
          {formattedPrice}
        </p>
        <p className="text-xs text-gray-500 h-10 overflow-hidden text-ellipsis">
          {product.description}
        </p>
      </div>
      <div className="p-4 mt-auto">
        <button
          type="button"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
