import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

const App = () => {
  return <div className="container bg-gray-500 mx-auto px-4 py-16">test</div>;
};

createRoot(document.getElementById('root')!).render(<App />);
