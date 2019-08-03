import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import sections from '../../constants/sections';
import './directory.styles.scss';

interface State {
    sections: {
        title: string;
        imageUrl: string;
        id: number;
        size?: string;
        linkUrl: string;
    }[];
}
interface Props { }

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
                {
                    this.state.sections.map(({ title, id, imageUrl, size }) => ( // destructured title instead of having to write for ex. section.title and etc..
                        <MenuItem title={title} key={id} imageUrl={imageUrl} size={size}/>
                    ))
                }
            </div>
        )
    }
}

export default Directory;