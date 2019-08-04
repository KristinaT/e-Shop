import React from 'react';
import Homepage from './pages/Homepage/Homepage';
import { Route, Switch } from 'react-router-dom';
import './App.css';

const HatsPage: React.FC = () => {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop/hats' component={HatsPage} />
      </Switch>
    </div>
  );
};

export default App;
