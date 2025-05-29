export default function CartItem({ cartItem }) {
  if (!cartItem) {
    return null;
  }

  const formattedPrice = `$${cartItem.price.toFixed(2)}`;

  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
      <div className="flex items-center space-x-4">
        <img
          src={cartItem.imageUrl}
          alt={cartItem.name}
          className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-md border border-gray-200"
        />
        <div>
          <h3 className="text-base sm:text-lg font-medium text-gray-800 truncate" title={cartItem.name}>
            {cartItem.name}
          </h3>
          <p className="text-sm text-gray-500">
            Unit Price: {formattedPrice}
          </p>
          <p className="text-sm text-gray-500">
            Quantity: {cartItem.quantity}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-end space-y-2">
        <p className="text-base sm:text-lg font-semibold text-gray-800">
          {`$${(cartItem.price * cartItem.quantity).toFixed(2)}`}
        </p>
        <button
          type="button"
          className="text-sm text-red-500 hover:text-red-700 font-medium focus:outline-none"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
