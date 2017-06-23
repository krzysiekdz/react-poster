import React from 'react';
import {connect} from 'react-redux';

import MovieCardList from '../Shared/MovieCardList'
import {searchMovies} from '../../../../actions/posterActions';


//smart component
class Search extends React.Component {

	componentWillMount(){
		//window.s = this;
		//wykonanie zapytania robi sie zawsze przy ladownaiu komponentu - nalezy zablokowac wtedy wykonanie zapytania od searchBox
		const {query} = this.props.location.query;
		if(query)
			this.props.searchMovies(query);
	}

	render() {
		const {movies} = this.props;
		return (
			<div>
				<MovieCardList movies={movies} cardType={'search'} loadingInfo={'movies'}/>
			</div>
		);
	}
}

///
const stateToProps = (state, ownProps) => {
	return {
		movies: state.poster.moviesSearch
	};
}

const dispatchToProps = (dispatch, ownProps) => {
	return {
		searchMovies: (query) => {
			dispatch(searchMovies(query));
		},
	}
}

const SearchView = connect(stateToProps, dispatchToProps)(Search);

export default SearchView;