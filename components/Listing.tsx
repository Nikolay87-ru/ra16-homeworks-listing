import React from 'react';

type ListingProps = {
  listing_id: number;
  url: string;
  MainImage: string;
  title: string;
  currency_code: string;
  price: string;
  quantity: number;
};

const Listing: React.FC< {items: ListingProps[]} > = ({ items }) => {
  if (items.title.lenght < 50 ) {
    const title50 = `${items.title.substring(0, 50)...}`;
    return title50;
  }

  return (
    {items.map((item, index) => (
    <div className="item-list">
      <div className="item"  key={index}>
        <div className="item-image">
          <a href="https://www.etsy.com/listing/292754135/woodland-fairy">
            <img src={item.url} alt={item.title} className="w-full h-full object-cover" />
          </a>
        </div>
        <div className="item-details">
          <p className="item-title">{title50}</p>
          <p className="item-price">$3.99</p>
          <p className="item-quantity level-medium">12 left</p>
        </div>
      </div>
    </div>
     ))}
  );
  
};

export defoult Listing;