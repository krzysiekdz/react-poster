import React from 'react';
import {connect} from 'react-redux';

import MovieCardList from '../Shared/MovieCardList'
import {getUpcoming} from '../../../../actions/posterActions'

//smart component
class Upcoming extends React.Component {

	componentWillMount() {
		if(!this.props.fetched)
			this.props.getMovies();
	}

	render() {
		const {movies} = this.props;
		return (
			<div>
				<MovieCardList movies={movies} cardType={'upcoming'} loadingInfo={'Upcoming'}/>
			</div>
		);
	}
}

///
const stateToProps = (state, ownProps) => {
	return {
		movies: state.poster.moviesUpcoming,
		fetched: state.poster.fetchedUpcoming,
	};
}

const dispatchToProps = (dispatch, ownProps) => {
	return {
		getMovies: () => {
			dispatch(getUpcoming());
		}
	};
}

const UpcomingView = connect(stateToProps, dispatchToProps)(Upcoming);

export default UpcomingView;