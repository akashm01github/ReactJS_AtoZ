import React, { useContext } from 'react';
import CartsCards from '../components/CartsCards';
import { MyShop } from '../context/MyContext';

const CartScreen = () => {

  const {cartItems} = useContext(MyShop);

  console.log(cartItems)



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
              {cartItems.map((item) => {
                return <CartsCards key={item.id} item={item}/>
              })}
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