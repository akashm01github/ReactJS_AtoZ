import React from 'react';

const CartScreen = ({ cartItems }) => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <h1 className="mb-6 text-3xl font-bold text-gray-800">
          Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="rounded-lg bg-white p-10 text-center shadow-sm">
            <h2 className="text-xl font-semibold text-gray-700">
              Your cart is empty
            </h2>

            <p className="mt-2 text-gray-500">
              Add some products to your cart.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-3">

            {/* Cart Items */}
            <div className="space-y-4 lg:col-span-2">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col gap-4 rounded-xl bg-white p-4 shadow-sm sm:flex-row sm:items-center"
                >
                  {/* Product Image */}
                  <div className="h-28 w-full shrink-0 overflow-hidden rounded-lg bg-gray-100 sm:w-28">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex flex-1 flex-col">
                    <h2 className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </h2>

                    <p className="mt-1 text-lg font-bold text-gray-900">
                      ₹{item.price}
                    </p>

                    {/* Quantity */}
                    <div className="mt-3 flex items-center gap-3">
                      <button className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-300 text-lg hover:bg-gray-100">
                        -
                      </button>

                      <span className="font-medium">
                        {item.quantity}
                      </span>

                      <button className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-300 text-lg hover:bg-gray-100">
                        +
                      </button>
                    </div>
                  </div>

                  {/* Remove */}
                  <button className="self-start text-sm font-medium text-red-500 hover:text-red-600 sm:self-center">
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div className="h-fit rounded-xl bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-xl font-bold text-gray-800">
                Order Summary
              </h2>

              <div className="flex justify-between border-b pb-4">
                <span className="text-gray-500">
                  Items
                </span>

                <span className="font-medium">
                  {cartItems.length}
                </span>
              </div>

              <div className="mt-4 flex justify-between">
                <span className="text-lg font-semibold">
                  Total
                </span>

                <span className="text-xl font-bold">
                  ₹
                  {cartItems.reduce(
                    (total, item) =>
                      total + item.price * item.quantity,
                    0
                  )}
                </span>
              </div>

              <button className="mt-6 w-full rounded-lg bg-black px-5 py-3 font-semibold text-white transition hover:bg-gray-800">
                Proceed to Checkout
              </button>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default CartScreen;