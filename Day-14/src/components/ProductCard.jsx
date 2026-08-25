import React, { useContext } from 'react'
import { MyShop } from '../context/MyContext'

const ProductCard = ({ product}) => {
  const { title, price, description, category, image, rating } = product

  const fullStars = Math.round(rating?.rate || 0)


  const {setCartItems } = useContext(MyShop);

  return (
    <div className="group flex w-72 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="relative flex h-56 items-center justify-center bg-slate-50 p-6">
        <span className="absolute left-3 top-3 rounded-full bg-slate-900/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
          {category}
        </span>
        <img
          src={image}
          alt={title}
          className="h-full w-full object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="line-clamp-2 min-h-11 text-sm font-semibold leading-snug text-slate-800">
          {title}
        </h3>

        <p className="line-clamp-2 text-xs text-slate-500">{description}</p>

        {/* Rating */}
        <div className="flex items-center gap-1.5">
          <div className="flex text-amber-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                viewBox="0 0 20 20"
                className={`h-4 w-4 ${i < fullStars ? 'fill-amber-400' : 'fill-slate-200'}`}
              >
                <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1 1 5.8L10 14.9l-5.21 2.62 1-5.8-4.21-4.1 5.82-.85z" />
              </svg>
            ))}
          </div>
          <span className="text-xs text-slate-400">({rating?.count ?? 0})</span>
        </div>

        {/* Price + CTA */}
        <div className="mt-auto flex items-center justify-between pt-3">
          <span className="text-lg font-bold text-slate-900">
            ${Number(price).toFixed(2)}
          </span>
          <button
            onClick={()=>setCartItems((prev)=>[...prev,product])}
            type="button"
            className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white transition-colors duration-200 hover:bg-slate-700 active:scale-95"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard