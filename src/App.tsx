import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './pages/Homepage/HomePage';
import ShopPage from './pages/Shop/ShopPage';
import Header from './components/Header/Header';
import SignInSignUpPage from './pages/SignInAndSignUpPage/SignInAndSignUpPage';
import { auth, createUserProfileDocument } from './firebase/Firebase';
import { Unsubscribe } from 'firebase';
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { setCurrentUser } from './redux/actions/userActions';
import './App.scss';
import { RootState } from './redux/reducers/types';

interface OwnProps {}

interface StateProps {
  currentUser: object | null;
}

interface DispatchProps {
  setCurrentUser: (user: any) => void;
}

type Props = OwnProps & StateProps & DispatchProps;

type State = StateProps & OwnProps & RootState;

class App extends React.Component<Props, State> {
  unsubscribeFromAuth: Unsubscribe | null = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        if (userRef) {
          userRef.onSnapshot(snapshot => {
            setCurrentUser({
              id: snapshot.id,
              /** Getting the document properties: displayName, email, ... */
              ...snapshot.data()
            });
          });
        }
      }

      setCurrentUser(userAuth);
    });
  }
  componentWillUnmount() {
    if (this.unsubscribeFromAuth) this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps: MapStateToProps<
  StateProps,
  OwnProps,
  RootState
> = state => ({
  currentUser: state.user.currentUser,
  hidden: state.cart.hidden
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = {
  setCurrentUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
