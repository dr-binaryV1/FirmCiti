import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import promise from 'redux-promise';

import reducers from './reducers';
import JusBussIndex from './components/home/firmCitiIndex';
import Restaurant from './components/restaurants/restaurantIndex';
import School from './components/schools/schoolIndex';
import RestaurantDetails from './components/restaurants/restaurantDetails';
import House from './components/houses/houseIndex';
import HouseDetails from './components/houses/houseDetails';
import AddHouse from './components/houses/addHouse';
import Event from './components/events/eventIndex';
import Header from './components/includes/header';
import { Footer } from './components/includes/footer';
import Auth from './components/auth/authorize';
import ShoppingCart from './components/shop/cart';
import SignOut from './components/auth/signout';
import UserProfile from './components/auth/userProfile';
import AddBusinessAsCustomer from './components/businessForms/addBusiness_as_Customer';
import AddBusinessAsOwner from './components/businessForms/addBusiness_as_Owner';
import { sessionService } from 'redux-react-session';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
const store = createStoreWithMiddleware(reducers);

const options = { refreshOnCheckAuth: true, redirectPath: '/', driver: 'COOKIES' };
sessionService.initSessionService(store, options);

ReactDOM.render(
	<Provider store={ store }>
		<div>
			<BrowserRouter>
				<div>
					<Header />
					<Switch>
						<Route path="/add-business-customer" component={AddBusinessAsCustomer} />
						<Route path="/add-business-owner" component={AddBusinessAsOwner} />
						<Route path="/restaurants/:id" component={RestaurantDetails} />
						<Route path="/restaurants" component={Restaurant} />
						<Route path="/schools" component={School} />
						<Route path="/authorize" component={Auth} />
						<Route path="/signout" component={SignOut} />
						<Route path="/houses/add-house" component={AddHouse} />
						<Route path="/houses/:id" component={HouseDetails} />
						<Route path="/houses" component={House} />
						<Route path="/events" component={Event} />
						<Route path="/profile" component={UserProfile} />
						<Route path="/shoppingcart" component={ShoppingCart} />
						<Route path="/" component={JusBussIndex} />
					</Switch>
				</div>
			</BrowserRouter>
		</div>
	</Provider>
  , document.querySelector('.container'));
