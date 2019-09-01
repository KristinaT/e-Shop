import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import './Directory.scss';
import { MapStateToProps, connect } from 'react-redux';
import { RootState } from '../../redux/reducers/types';
import { selectDirectorySections } from '../../redux/selectors/directorySelectors';

interface State {
  sections: {
    title: string;
    imageUrl: string;
    id: number;
    size?: string;
    linkUrl: string;
  }[];
}

interface StateProps {
  sections: { title: string; imageUrl: string; id: number; linkUrl: string }[];
}
interface OwnProps {}

type Props = StateProps & OwnProps;

const Directory: React.FC<Props> = ({ sections }) => (
  <div className='directory-menu'>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps: MapStateToProps<
  StateProps,
  OwnProps,
  RootState
> = state => ({
  sections: selectDirectorySections(state)
});
export default connect(mapStateToProps)(Directory);
