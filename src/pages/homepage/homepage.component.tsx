import React from 'react'
import Directory from '../../components/directory/directory.component';
import './homepage.styles.scss';

const HomePage: React.FC = () => {
    return (
        <div className='homepage'>
            <Directory />
        </div>
    )
}

export default HomePage;