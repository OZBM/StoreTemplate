import { mockCartItems } from "../mock-cart-items"; // Adjusted path
import CartItem from "../components/CartItem"; // Adjusted path

export default function CartPage() {
  const calculateTotalPrice = () => {
    return mockCartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const totalPrice = calculateTotalPrice();

  return (
    <main className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-8 sm:mb-10">
          Your Shopping Cart
        </h1>

        {mockCartItems && mockCartItems.length > 0 ? (
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="divide-y divide-gray-200">
              {mockCartItems.map((item) => (
                <CartItem key={item.id} cartItem={item} />
              ))}
            </div>

            <div className="p-6 bg-gray-50 border-t border-gray-200">
              <div className="flex justify-between items-center mb-6">
                <p className="text-xl font-semibold text-gray-800">
                  Total Price:
                </p>
                <p className="text-2xl font-bold text-indigo-600">
                  {`$${totalPrice.toFixed(2)}`}
                </p>
              </div>
              <button
                type="button"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out text-lg"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-500 bg-white shadow-lg rounded-lg p-10">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <h2 className="mt-2 text-xl font-medium text-gray-800">Your cart is empty.</h2>
            <p className="mt-1 text-sm text-gray-500">
              Looks like you haven't added anything to your cart yet.
            </p>
            {/* Optional: Link to products page */}
            {/* <a href="/products" className="mt-6 inline-block text-sm font-medium text-indigo-600 hover:text-indigo-500">
              Start shopping &rarr;
            </a> */}
          </div>
        )}
      </div>
    </main>
  );
}
