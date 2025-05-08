import { createRoot } from 'react-dom/client';
import Listing from './components/Listing';
import data from '../data/etsy.json';
import './index.css';
import type { Item, EtsyItem } from './components/Item';


const App = () => {
  const items = (data as EtsyItem[])
    .filter((item): item is Item => (
      typeof item.listing_id === 'number' &&
      typeof item.url === 'string' &&
      typeof item.MainImage?.url_570xN === 'string' &&
      typeof item.title === 'string' &&
      typeof item.currency_code === 'string' &&
      typeof item.price === 'string' &&
      typeof item.quantity === 'number'
    ));

  return (
    <div className="min-h-full bg-gray-200 text-gray-800 font-work-sans">
      <div className="wrapper">
        <Listing items={items} />
      </div>
    </div>
  );
};

export default App;

createRoot(document.getElementById('root')!).render(<App />);
