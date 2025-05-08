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
    <div className="item-list mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {items.map(item => (
        <div 
          key={item.listing_id}
          className="item bg-white rounded shadow-md p-4 relative transition-opacity duration-300"
        >
          <div className="item-image bg-gray-200 rounded">
            <a href={item.url}>
              <img
                src={item.MainImage.url_570xN}
                alt={item.title}
                className="w-full h-auto rounded transition-opacity duration-1200"
                loading="lazy"
              />
            </a>
          </div>
          <div className="item-details">
            <p className="item-title text-sm my-2 mx-1 break-words">
              {item.title.length > 50 ? `${item.title.slice(0, 50)}...` : item.title}
            </p>
            <p className="item-price text-green-700 text-xl font-semibold mx-1 mt-2">
              {formatPrice(item.currency_code, item.price)}
            </p>
            <p className={`item-quantity absolute bottom-4 right-4 text-xs font-semibold px-2 py-1 rounded text-white
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
