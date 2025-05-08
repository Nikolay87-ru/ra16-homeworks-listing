import React from 'react';
import type { Item } from './Item';
import '../src/index.css';

const Listing: React.FC<{ items: Item[] }> = ({ items = [] }) => {
  const formatPrice = (currency: string, price: string) => {
    if (currency === 'USD') return `$${price}`;
    if (currency === 'EUR') return `€${price}`;
    if (currency) return `${price} ${currency}`;
  };

  const getQuantityLevelClass = (quantity: number) => {
    if (quantity <= 10) return 'bg-red-600';  
    if (quantity <= 20) return 'bg-yellow-700'; 
    return 'bg-green-700'; 
  };

  return (
    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {items.map(item => (
        <div 
          key={item.listing_id}
          className="bg-white rounded shadow-md p-4 relative"
        >
          <div className="bg-gray-200 rounded">
            <a href={item.url}>
              <img
                src={item.MainImage.url_570xN}
                alt={item.title}
                className="w-full h-auto rounded"
                loading="lazy"
              />
            </a>
          </div>
          <div className="mt-2">
            <p className="text-sm mb-2 line-clamp-2">
              {item.title}
            </p>
            <p className="text-green-700 text-xl font-semibold">
              {formatPrice(item.currency_code, item.price)}
            </p>
            <p className={`absolute bottom-4 right-4 text-xs font-semibold px-2 py-1 rounded
              ${getQuantityLevelClass(item.quantity)}`}
            >
              {`${item.quantity} left`}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Listing;
