import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/Homepage/HomePage';
import ShopPage from './pages/Shop/ShopPage';
import Header from './components/Header/Header';
import SignInSignUpPage from './pages/SignInAndSignUpPage/SignInAndSignUpPage';
import { auth } from './firebase/Firebase';
import './App.css';
import { Observer, Unsubscribe } from 'firebase';

interface State {
  currentUser: object | null;
}

class App extends React.Component<{}, State> {
  state = {
    currentUser: null
  };

  unsubscribeFromAuth: Unsubscribe | null = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }
  componentWillUnmount() {
    if (this.unsubscribeFromAuth) this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
