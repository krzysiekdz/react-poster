import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router'

import Layout from './components/Views/Layout';
import Search from './components/Views/Section/Search/Search';
import TopRated from './components/Views/Section/TopRated/TopRated';
import Upcoming from './components/Views/Section/Upcoming/Upcoming';
import Watchlist from './components/Views/Section/Watchlist/Watchlist';
import MovieDetails from './components/Views/Section/MovieDetails/MovieDetails';

import store from './store'

const app = document.getElementById('app');

ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={Layout} >
				<IndexRoute component={Search} />
				<Route path="top_rated" component={TopRated} />
				<Route path="upcoming" component={Upcoming} />
				<Route path="watchlist" component={Watchlist} />
				<Route path="movie/:movie_id" component={MovieDetails} />
			</Route>
		</Router>
	</Provider>
, app);