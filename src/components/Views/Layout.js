import React from 'react';
import {connect} from 'react-redux';

import Header from './Header/Header'
import Footer from './Footer/Footer'
import Jumbotron from './Section/Jumbotron'

import {fetchMovies, putMovie} from '../../actions/posterActions';
import * as posterActions from '../../actions/posterActions';

/*
@connect((state) => {
	return {
		movies: state.poster.movies,
	};
})*/

class Layout extends React.Component {

	componentWillMount() {
		//console.log(this);
	}	

	componentDidMount() {
		//console.log(this);
		window.layout = this;
	}

	handleSearch(query) {
		let path = this.props.location.pathname;
		this.context.router.push({//przelaczenie się na komponent '/'; context.router uzywany zamisat przestarzalego history i czegos jeszcze
			pathname: '/',
			query: {
				query
			}
		});
		
		if(path === '/') {//zezwalam na wywolanie zapytania, tylko jesli juz komponent '/' jest zamontowany, inaczej zapytanie wykona sie poprzez componentWillMount
			this.props.searchMovies(query);
		}	
	}

	render() {
		const {location, fetching} = this.props;
		let hide = false;
		if(location.pathname.match(/^\/movie/)) {
			hide = true;
		}
		///
		return (
			<div>
				<Header location={location}/>
				<div class="container" id="content">
					<Jumbotron 
						action={this.handleSearch.bind(this)}
						hide={hide}
					/>
					{this.props.children}
				</div>
				<Footer />
			</div>
		);
	}
}
///

Layout.contextTypes = {
	router: React.PropTypes.object.isRequired
};

const stateToProps = (state, ownProps) => {
	return {
		
	}
}

const dispatchToProps = (dispatch, ownProps) => {
	return {
		searchMovies: (query) => {//akcja musi byc, bo wykonuje sie, gdy jestesmy na komponencie '/', w innym wypadku wykona sie akcja z komponentu Search willMount
			dispatch(posterActions.searchMovies(query));//akcja jest podpinana z dostepnych akcji
		},
	}
}


const LayoutView = connect(stateToProps, dispatchToProps)(Layout);

export default LayoutView;
