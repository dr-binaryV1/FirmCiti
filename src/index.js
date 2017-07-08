import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import promise from 'redux-promise';

import reducers from './reducers';
import JusBussIndex from './components/home/jusBussIndex';
import Restaurant from './components/restaurants/restaurantIndex';
import School from './components/schools/schoolIndex';
import RestaurantDetails from './components/restaurants/restaurantDetails';
import House from './components/houses/houseIndex';
import HouseDetails from './components/houses/houseDetails';
import Event from './components/events/eventIndex';
import Header from './components/includes/header';
import { Footer } from './components/includes/footer';
import Auth from './components/auth/authorize';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/restaurants/:id" component={RestaurantDetails} />
            <Route path="/restaurants" component={Restaurant} />
            <Route path="/schools" component={School} />
            <Route path="/authorize" component={Auth} />
            <Route path="/houses/:id" component={HouseDetails} />
            <Route path="/houses" component={House} />
            <Route path="/events" component={Event} />
            <Route path="/" component={JusBussIndex} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  </Provider>
  , document.querySelector('.container'));
