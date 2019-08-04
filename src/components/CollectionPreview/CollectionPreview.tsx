import React from 'react';
import { ShopItems } from '../../staticData/ShopData';
import './CollectionPreview.scss';

interface PreviewCollection {
  key: number;
  title: string;
  items: ShopItems[];
}
const CollectionPreview: React.FC<PreviewCollection> = ({ title, items }) => {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      {console.log(items, ' items')}

      <div className='preview'>
        {items
          .filter((item, index) => index < 4)
          .map(item => (
            <div key={item.id}>{item.name}</div>
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
