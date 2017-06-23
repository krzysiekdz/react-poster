import React from 'react';
import {connect} from 'react-redux';

import MovieCardList from '../Shared/MovieCardList'
import {getTopRated} from '../../../../actions/posterActions'

//smart component
class TopRated extends React.Component {

	componentWillMount() {
		if(!this.props.fetched)
			this.props.getMovies();
	}

	render() {
		const {movies} = this.props;
		return (
			<div>
				<MovieCardList movies={movies} cardType={'top_rated'} loadingInfo={'Top Rated'}/>
			</div>
		);
	}
}

///
const stateToProps = (state, ownProps) => {
	return {
		movies: state.poster.moviesTopRated,
		fetched: state.poster.fetchedTopRated,
	};
}

const dispatchToProps = (dispatch, ownProps) => {
	return {
		getMovies: () => {
			dispatch(getTopRated());
		}
	};
}

const TopRatedView = connect(stateToProps, dispatchToProps)(TopRated);

export default TopRatedView;