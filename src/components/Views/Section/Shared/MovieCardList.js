import React from 'react';
import {connect} from 'react-redux';

import MovieCard from './MovieCard'
import LoadingAnimation from '../../../Widgets/LoadingAnimation'


//smart component
class MovieCardList extends React.Component {
	render() {
		
		return (
			<div class="row ">
				{this.renderCard()}
				{this.renderAnimation()}
			</div>
		);
	}
	///
	renderCard() {
		const {movies, cardType, fetching} = this.props;
		if(!fetching) {
			if(movies.length > 0) {
				return movies.map((m, i) => <MovieCard 
					key={i} 
					_key={i} 
					movie={m} 
					cardType={cardType}
				/>);
			}
			else {
				return (<h2 class="text-center" id='poster-movies-not-found'>No movies found!</h2>);
			}
		}
		
	}

	///
	renderAnimation() {
		let {loadingInfo} = this.props;
		if(this.props.fetching) {
			return <LoadingAnimation text={loadingInfo}/>
		}
	}
}

///

const stateToProps = (state, props) => {
	return {
		fetching: state.poster.fetching,
	};
}

const dispatchToProps = (state, props) => {
	return {

	};
}

const MovieCardListView = connect(stateToProps, dispatchToProps)(MovieCardList);

export default MovieCardListView;