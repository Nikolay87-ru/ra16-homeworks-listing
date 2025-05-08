import React from 'react';
import type { Item } from './Item';

const Listing: React.FC<{ items: Item[] }> = ({ items = [] }) => {
  const formatPrice = (currency: string, price: string) => {
    if (currency === 'USD') return `$${price}`;
    if (currency === 'EUR') return `€${price}`;
    return `${price} ${currency}`;
  };

  const getQuantityLevel = (quantity: number) => {
    if (quantity <= 10) return 'level-low';
    if (quantity <= 20) return 'level-medium';
    return 'level-high';
  };

  return (
    <div className="item-list">
      {items.map(item => (
        <div className="item" key={item.listing_id}>
          <div className="item-image">
            <a href={item.url}>
              <img 
                src={item.MainImage.url_570xN} 
                alt={item.title} 
                className="item-image__img"
              />
            </a>
          </div>
          <div className="item-details">
            <p className="item-title">
              {item.title.length > 50 ? `${item.title.substring(0, 50)}...` : item.title}
            </p>
            <p className="item-price">
              {formatPrice(item.currency_code, item.price)}
            </p>
            <p className={`item-quantity ${getQuantityLevel(item.quantity)}`}>
              {`${item.quantity} left`}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Listing;
