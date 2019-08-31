import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/Homepage/HomePage';
import ShopPage from './pages/Shop/ShopPage';
import Header from './components/Header/Header';
import SignInSignUpPage from './pages/SignInAndSignUpPage/SignInAndSignUpPage';
import { auth, createUserProfileDocument } from './firebase/Firebase';
import { Unsubscribe } from 'firebase';
import { connect, MapDispatchToProps } from 'react-redux';
import { setCurrentUser } from './redux/actions/userActions';
import './App.scss';

interface State {
  currentUser: object | null;
}

interface OwnProps {}

interface StateProps {}

interface DispatchProps {
  setCurrentUser: (user: any) => void;
}

type Props = OwnProps & StateProps & DispatchProps;

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
          <Route path='/signin' component={SignInSignUpPage} />
        </Switch>
      </div>
    );
  }
}
// const mapDispatchToProps = (
//   dispatch: (arg0: { type: string; payload: object | null }) => void
// ) => ({
//   setCurrentUser: (user: object | null) => dispatch(setCurrentUser(user))
// });

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = {
  setCurrentUser
};

export default connect(
  null,
  mapDispatchToProps
)(App);
