import { useContext } from "react";
import { MyStore } from "../context/MyContext";

const ProductCard = ({ product}) => {
  if (!product) return null;

  const {setCartItems} = useContext(MyStore);
  
  const {
    title,
    price = 0,
    description,
    category,
    image,
    rating = { rate: 0, count: 0 },
  } = product;

  return (
    <div className="group flex w-full max-w-xs flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-[#F2EFE7] transition-shadow duration-200 hover:shadow-lg">
      {/* Image */}
      <div className="relative flex h-52 items-center justify-center bg-neutral-50 p-6">
        <span className="absolute left-3 top-3 rounded-full bg-[#601D49] px-2.5 py-1 text-[11px] font-medium capitalize text-white">
          {category}
        </span>
        <img
          src={image}
          alt={title}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="line-clamp-2 min-h-11 text-sm font-semibold leading-snug text-neutral-900">
          {title}
        </h3>

        <p className="line-clamp-2 text-xs leading-relaxed text-neutral-500">
          {description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1.5">
          <span className="text-xs font-medium text-amber-500">
            ★ {rating.rate.toFixed(1)}
          </span>
          <span className="text-xs text-neutral-400">({rating.count})</span>
        </div>

        <div className="mt-auto flex items-center justify-between pt-3">
          <span className="text-lg font-bold text-neutral-900">
            ${price.toFixed(2)}
          </span>
          <button
            onClick={() => setCartItems((prev)=>[...prev, product])}
            className="rounded-full bg-neutral-900 px-3.5 py-2 text-xs font-medium text-white transition-colors hover:bg-neutral-700 active:scale-95"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;