import React, { useContext } from "react";
import { MyShop } from "../context/MyContext";

const Cart = () => {

    const { cartItems } = useContext(MyShop);

    
    const items = cartItems || [];

    const total = items.reduce(
        (sum, item) => sum + item.price * (item.quantity || 1),
        0
    );

    if (items.length === 0) {
        return (
            <div className="flex h-screen flex-col items-center justify-center bg-neutral-50">
                <p className="text-lg font-medium text-neutral-400">
                    Your cart is empty
                </p>
            </div>
        );
    }




    return (
        <div className="min-h-screen bg-neutral-50 px-4 py-8 sm:px-8">
            <div className="mx-auto max-w-3xl">
                <h1 className="mb-6 text-xl font-bold text-neutral-900">
                    Your Cart ({items.length})
                </h1>

                <div className="flex flex-col gap-4">
                    {items.map((item) => {
                        const quantity = item.quantity || 1;
                        return (
                            <div
                                key={item.id}
                                className="flex items-center gap-4 rounded-2xl border border-neutral-200 bg-white p-4"
                            >
                                {/* Image */}
                                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-neutral-50 p-2">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="h-full w-full object-contain"
                                    />
                                </div>

                                {/* Info */}
                                <div className="flex flex-1 flex-col gap-1 overflow-hidden">
                                    <h3 className="line-clamp-1 text-sm font-semibold text-neutral-900">
                                        {item.title}
                                    </h3>
                                    <span className="text-xs capitalize text-neutral-400">
                                        {item.category}
                                    </span>
                                    <span className="text-sm font-bold text-neutral-900">
                                        ${item.price.toFixed(2)}
                                    </span>
                                </div>

                                {/* Quantity */}
                                <div className="flex items-center gap-2 rounded-full border border-neutral-200 px-2 py-1">
                                    <button
                                        className="flex h-6 w-6 items-center justify-center rounded-full text-neutral-500 transition-colors hover:bg-neutral-100"
                                    >
                                        −
                                    </button>
                                    <span className="w-4 text-center text-sm font-medium text-neutral-900">
                                        {quantity}
                                    </span>
                                    <button
                                        className="flex h-6 w-6 items-center justify-center rounded-full text-neutral-500 transition-colors hover:bg-neutral-100"
                                    >
                                        +
                                    </button>
                                </div>

                                {/* Line total + remove */}
                                <div className="flex flex-col items-end gap-2">
                                    <span className="text-sm font-bold text-neutral-900">
                                        ${(item.price * quantity).toFixed(2)}
                                    </span>
                                    <button
                                        className="text-xs font-medium text-neutral-400 transition-colors hover:text-red-500"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Summary */}
                <div className="mt-6 flex items-center justify-between rounded-2xl border border-neutral-200 bg-white p-5">
                    <span className="text-sm font-medium text-neutral-500">
                        Total
                    </span>
                    <span className="text-xl font-bold text-neutral-900">
                        ${total.toFixed(2)}
                    </span>
                </div>

                <button className="mt-4 w-full rounded-full bg-neutral-900 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-700 active:scale-[0.99]">
                    Checkout
                </button>
            </div>
        </div>
    );
};

export default Cart;