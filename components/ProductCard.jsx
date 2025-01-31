import { Eye, Heart, Star, Truck, Tag, ShoppingCart } from 'lucide-react';
import Link from 'next/link';

function ProductCard({id, imgUrl, title, price, ratings}) {
  return (
    <div className="rounded-lg border border-gray-300 bg-white p-6 shadow-sm">
      {/* Product Image */}
      <div className="h-56 w-full">
        <Link href={`/product/${id}`}>
          <img
            className="mx-auto h-full"
            src={imgUrl}
            alt={title}
          />
        </Link>
      </div>

      {/* Product Details */}
      <div className="pt-6">
        {/* Badge & Actions */}
        <div className="mb-4 flex items-center justify-between gap-4">
          <span className="badge badge-primary text-xs">Up to 35% off</span>
          <div className="flex items-center gap-1">
            {/* Quick Look */}
            <button
              className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              title="Quick Look"
            >
              <Eye size={20} />
            </button>

            {/* Add to Favorites */}
            <button
              className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              title="Add to Favorites"
            >
              <Heart size={20} />
            </button>
          </div>
        </div>

        {/* Product Title */}
        <a
          href="#"
          className="text-lg font-semibold leading-tight text-gray-900 hover:underline "
        >
          {title}
        </a>

        {/* Ratings */}
        <div className="mt-2 flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className="text-yellow-400" />
            ))}
          </div>
          <p className="text-sm font-medium text-gray-900 dark:text-white">5.0</p>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{ratings}</p>
        </div>

        {/* Features */}
        <ul className="mt-2 flex items-center gap-4">
          <li className="flex items-center gap-2">
            <Truck size={16} className="text-gray-500 dark:text-gray-400" />
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Fast Delivery</p>
          </li>
          <li className="flex items-center gap-2">
            <Tag size={16} className="text-gray-500 dark:text-gray-400" />
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Best Price</p>
          </li>
        </ul>

        {/* Price & Button */}
        <div className="mt-4 flex items-center justify-between gap-4">
          <p className="text-2xl font-extrabold leading-tight text-gray-900">
            $ {price}
          </p>
          <button className="btn btn-primary flex items-center gap-2">
            <ShoppingCart size={20} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
