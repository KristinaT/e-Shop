import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import SECTIONS from '../../staticData/Sections';
import './Directory.scss';

interface State {
  sections: {
    title: string;
    imageUrl: string;
    id: number;
    size?: string;
    linkUrl: string;
  }[];
}

class Directory extends React.Component<{}, State> {
  constructor(props: Readonly<{}>) {
    super(props);

    this.state = {
      sections: SECTIONS
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
