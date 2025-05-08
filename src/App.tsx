import React from 'react';
import { createRoot } from 'react-dom/client';
import type { Item } from '../components/Item';
import './index.css';
import Listing from '../components/Listing';
import data from '../data/etsy.json';

const App = () => {
  const items = data.filter(
    (item) =>
      item.listing_id &&
      item.url &&
      item.MainImage?.url_570xN &&
      item.title &&
      item.currency_code &&
      item.price &&
      item.quantity !== undefined,
  ) as Item[];

  return (
    <div className="min-h-full bg-gray-200 text-gray-800 font-sans">
      <div className="wrapper mx-auto py-4 w-[calc(100%-5rem)]">
        <Listing items={items} />
      </div>
    </div>
  );
};

createRoot(document.getElementById('root')!).render(<App />);
