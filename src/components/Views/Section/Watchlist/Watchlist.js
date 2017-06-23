import React from 'react';
import {connect} from 'react-redux';

import MovieCardList from '../Shared/MovieCardList'
import {getWatchlist} from '../../../../actions/posterActions'

//smart component
class Watchlist extends React.Component {

	componentWillMount() {
		if(!this.props.fetched)
			this.props.getMovies();
	}

	render() {
		const {movies} = this.props;
		return (
			<div>
				<MovieCardList movies={movies} cardType={'watchlist'} loadingInfo={'Watchlist'}/>
			</div>
		);
	}
}

///
const stateToProps = (state, ownProps) => {
	return {
		movies: state.poster.moviesWatchlist,
		fetched: state.poster.fetchedWatchlist,
	};
}

const dispatchToProps = (dispatch, ownProps) => {
	return {
		getMovies: () => {
			dispatch(getWatchlist());
		}
	};
}

const WatchlistView = connect(stateToProps, dispatchToProps)(Watchlist);

export default WatchlistView;