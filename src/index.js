import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import promise from 'redux-promise';

import reducers from './reducers';
import JusBussIndex from './components/jusBussIndex';
import Restaurant from './components/restaurantIndex';
import Header from './components/header';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/restaurants" component={Restaurant} />
            <Route path="/" component={JusBussIndex} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  </Provider>
  , document.querySelector('.container'));
