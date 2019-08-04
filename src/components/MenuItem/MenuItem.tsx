import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import './MenuItem.scss';

interface MenuItem {
  title: string;
  key: number;
  imageUrl: string;
  size?: string;
  history: any;
  linkUrl: string;
  match: any;
}

const MenuItem: React.FC<MenuItem & RouteComponentProps> = ({
  title,
  imageUrl,
  size,
  history,
  linkUrl,
  match
}: MenuItem) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    {console.log(history, ' history')}
    {console.log(match, ' match')}
    {console.log(linkUrl, ' linkUrl')}
    {console.log(`${match.url}${linkUrl}`, ' linkUrl')}

    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />

    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
