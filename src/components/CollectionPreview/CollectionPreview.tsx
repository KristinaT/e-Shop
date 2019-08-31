import React from 'react';
import { ShopItems } from '../../staticData/ShopData';
import CollectionItem from '../CollectionItem/CollectionItem';
import './CollectionPreview.scss';

interface PreviewCollection {
  key: number;
  title: string;
  items: ShopItems[];
}
type Props = PreviewCollection;
const CollectionPreview: React.FC<Props> = ({ title, items }) => {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items
          .filter((item, index) => index < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
