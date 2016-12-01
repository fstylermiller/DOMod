import React, { Component } from 'react';
import { Match, Miss } from 'react-router';
import classnames from 'classnames';
import Main from './Main';
import Profile from './Profile';
import Login from './Authenticate';

class Router extends Component {
  render() {
    return (
      <div>
        <Match pattern="/" exactly component={Main} />
        <Match pattern="/js-player" component={Main} />
        <Match pattern="/profile" component={Profile} />
        <Match pattern="/login" render={
          () => <Login
                  handleLoginState={this.props.handleLoginState}
                />}
        />
      </div>
    )
  }
}

export default Router;
