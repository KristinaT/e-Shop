import React from 'react';
import './MenuItem.scss'

interface MenuItem {
    title: string;
    key: number;
    imageUrl: string;
    size?: string;
}

const MenuItem: React.FC<MenuItem> = ({ title, imageUrl, size }: MenuItem) => (
    <div className={`${size} menu-item`}>
        <div className='background-image' style={{
            backgroundImage: `url(${imageUrl})`
        }} />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div >
)

export default MenuItem;