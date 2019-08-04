import React from 'react';
import './CollectionItem.scss';

interface CollectionItem {
  id?: number;
  name: string;
  price: number;
  imageUrl: string;
}
type Props = CollectionItem;

const CollectionItem: React.FC<Props> = ({ id, name, price, imageUrl }) => (
  <div className='collection-item'>
    <div
      className='image'
      style={{
        backgroundImage: `url(${imageUrl}  )`
      }}
    />
    <div className='collection-footer'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>
  </div>
);

export default CollectionItem;
