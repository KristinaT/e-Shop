import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import sections from '../../constants/Sections';
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
interface Props {}

class Directory extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      sections: sections
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
