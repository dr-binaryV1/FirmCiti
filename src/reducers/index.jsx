import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import EventReducer from './reducer_event';
import HouseReducer from './reducer_house';
import SchoolReducer from './reducer_school';
import CategoriesReducer from './reducer_categories';
import RestaurantReducer from './reducer_restaurant';
import CommentReducer from './reducer_comment';
import BusinessReducer from './reducer_business';
import ShoppingCartReducer from './reducer_shoppingCart';
import AuthReducer from './reducer_auth';
import { sessionReducer } from 'redux-react-session';

const rootReducer = combineReducers({
	events: EventReducer,
	houses: HouseReducer,
	schools: SchoolReducer,
	categories: CategoriesReducer,
	restaurants: RestaurantReducer,
	addRestaurantStatus: RestaurantReducer,
	loginStatus: AuthReducer,
	signupStatus: AuthReducer,
	addBusinessStatus: BusinessReducer,
	removeBusinessStatus: BusinessReducer,
	addToCartStatus: ShoppingCartReducer,
	comment: CommentReducer,
	session: sessionReducer,
	form: formReducer
});

export default rootReducer;
