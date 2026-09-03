import React, { useContext } from "react";
import { Star } from "lucide-react";
import { MyShop } from "../context/MyContext";

const Productcard = ({ product, isInCart }) => {

    const { setCartItems, incrementQuantity, decrementQuantity} = useContext(MyShop);

    const {
        title = "",
        price = 0,
        description = "",
        category = "",
        image = "",
        rating = { rate: 0, count: 0 },
    } = product || {};





    const addToCart = () => {
        setCartItems((prev) => [...prev, {...product, quantity:1}])
    }

    return (
        <div className="group w-full max-w-xs bg-[#FBFAF7] border border-[#E4E0D6] rounded-sm overflow-hidden transition-shadow duration-300 hover:shadow-[0_8px_24px_rgba(28,25,20,0.08)]">
            {/* Image */}
            <div className="relative bg-[#F1EEE6] px-8 pt-8 pb-6 flex items-center justify-center">
                <span className="absolute top-3 left-3 text-[10px] tracking-wide text-[#8A8371] font-medium">
                    {category}
                </span>
                <img
                    src={image}
                    alt={title}
                    className="h-40 w-auto object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-[1.04]"
                />
            </div>

            {/* Divider */}
            <div className="h-px bg-[#E4E0D6]" />

            {/* Content */}
            <div className="px-5 pt-4 pb-5 flex flex-col gap-2.5">
                <h3 className="font-serif text-[17px] leading-snug text-[#1C1914] line-clamp-2">
                    {title}
                </h3>

                <p className="text-[13px] leading-relaxed text-[#6B6455] line-clamp-2">
                    {description}
                </p>

                <div className="flex items-center justify-between pt-1">
                    <span className="text-[18px] font-serif text-[#1C1914]">
                        ${price.toFixed(2)}
                    </span>

                    <div className="flex items-center gap-1 text-[#8A8371]">
                        <Star size={13} className="fill-[#C99B3B] text-[#C99B3B]" />
                        <span className="text-[12px]">
                            {rating.rate}
                            <span className="text-[#B3AB99]"> ({rating.count})</span>
                        </span>
                    </div>
                </div>

                <div>
                    {
                        isInCart ? (
                            <button className="mt-2 w-full py-2.5 flex items-center justify-around border border-[#1C1914] rounded">
                                <span onClick={()=>incrementQuantity(product.id)} className="bg-orange-400 px-3 py-1 active:scale-90 rounded cursor-pointer">+</span>
                                <span className="text-xl">{isInCart.quantity}</span>

                                <span onClick={()=>decrementQuantity(product.id)} className="bg-purple-400 px-3 py-1 active:scale-90 rounded cursor-pointer">-</span>
                            </button>
                        ) : (
                            <button onClick={() => addToCart()} className="mt-2 w-full py-2.5 border border-[#1C1914] text-[13px] tracking-wide text-[#1C1914] transition-colors duration-200 hover:bg-[#1C1914] hover:text-[#FBFAF7]">
                                Add to cart
                            </button>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Productcard;