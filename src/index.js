import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import promise from 'redux-promise';

import reducers from './reducers';
import JusBussIndex from './components/home/jusBussIndex';
import Restaurant from './components/restaurants/restaurantIndex';
import House from './components/houses/houseIndex';
import Header from './components/header';
import Auth from './components/auth/authorize';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/restaurants" component={Restaurant} />
            <Route path="/houses" component={House} />
            <Route path="/authorize" component={Auth} />
            <Route path="/" component={JusBussIndex} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  </Provider>
  , document.querySelector('.container'));
