import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import './styles/global/styles.scss';

import * as serviceWorker from './serviceWorker';

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import AboutPage from './app/pages/about/about.page';
import App from './app/App';
import GamePage from './app/pages/game/game.page';
import NoResultPage from './app/pages/no-result/no-result.page';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/about" component={AboutPage} />
      <Route path="/game" component={GamePage} />
      <Route path='*' component={NoResultPage} />
    </Switch>
  </BrowserRouter>, 
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
