import React from 'react';
import Directory from '../../components/Directory/Directory';
import { HomePageContainer } from './HomePageStyles';

const HomePage: React.FC = () => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default HomePage;
