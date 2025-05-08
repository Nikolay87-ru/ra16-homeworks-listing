import React from 'react';
import { createRoot } from 'react-dom/client';
import type { Item } from '../components/Item';
import './index.css';
import Listing from '../components/Listing';
import data from '../data/etsy.json';

const App = () => {
  const items = data
    .filter(item => (
      item.listing_id &&
      item.url &&
      item.MainImage?.url_570xN &&
      item.title &&
      item.currency_code &&
      item.price &&
      item.quantity !== undefined
    )) as Item[]; 

  return (
    <div className="container mx-auto px-4 py-16">
      <Listing items={items} />
    </div>
  );
};

createRoot(document.getElementById('root')!).render(<App />);
