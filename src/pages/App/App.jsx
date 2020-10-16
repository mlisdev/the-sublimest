import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';

import Header from '../../components/Header/Header';
import SearchArea from '../../components/SearchArea/SearchArea';
import TrailDetail from '../../pages/TrailDetail/TrailDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'; 


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser()
    };
  }

  /*--- Callback Methods ---*/
  handleLogout = () => {
    userService.logout();
    this.setState({user: null})
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()})
  }
  /*--- Lifecycle Methods ---*/

  render() {
    return (
      <Container fluid="md"> 
        <Header 
        user={this.state.user} 
        handleLogout={this.handleLogout}
            />
        <Switch>
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin} 
            />
          }/>
          <Route exact path='/login' render={({history}) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/details' render={({history}) => 
            userService.getUser() ?
            <TrailDetail
                history={history}
                user={this.state.user}
            />
              :
              <Redirect to='/login' />
          }/>
          <Route exact path='/' render={({ history }) =>
             userService.getUser() ?
            <SearchArea
              history={history}
              />
                :
              <Redirect to='/login' />
          }/>
        </Switch>
      </Container>
      
    );
  }
}

export default App;
