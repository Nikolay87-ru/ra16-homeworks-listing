import React from 'react';
import Listing from '../components/Listing';
import etsy from '../data/etsy.json';
import { createRoot } from 'react-dom/client';
import './index.css';

const App = () => {
  const data = etsy.toString();
  return <div className="container bg-gray-500 mx-auto px-4 py-16"><Listing items={data} /></div>;
};

createRoot(document.getElementById('root')!).render(<App />);
