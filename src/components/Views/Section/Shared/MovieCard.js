import React from 'react';
import {connect} from 'react-redux'

import * as PosterActions from '../../../../actions/posterActions'
//smart componennt
class MovieCard extends React.Component {
	constructor() {
		super();
		this.imgDefaultBack = 'img/1.jpg';
		this.imgDefaultFront = 'img/2.jpg';
		//this.movie = this.props.movie;
		//this.key = this.props.key;//nie mozna w konstruktorze siegnac do propsow
		//console.log(this.props);//undef
	}

	render() {
		const {_key} = this.props;
		console.log('rendering movie card', _key);
		let elClass = ((_key %2 ) == 0 ) ? ' poster-movie-card-left ' : ' poster-movie-card-right ';
		let offsetClass = ((_key %2 ) == 0 ) ? ' col-md-offset-3 ' : ' ';

		return (
			<div class={"col-md-6 col-lg-6 col-sm-6 col-xs-6 poster-movie-card" + elClass}>
				<div class="row">
					<div class={"col-md-9" + offsetClass} >
						{this.content()}
					</div>
				</div>
			</div>
				
		);
	}

	///
	content() {
		const {movie} = this.props;
		// let imgBack = movie.backdrop_path.small;
		let imgFront = movie.poster_path.small;

		// imgBack = imgBack? imgBack:this.imgDefaultBack;
		imgFront = imgFront? imgFront:this.imgDefaultFront;

		return (
			<div class="thumbnail poster-thumbnail" >
				{this.getBackImg(movie.backdrop_path.small)}
				<a href={`#movie/${movie.id}`}>
					<img src={imgFront} alt="image" class="poster-img-front"/>
				</a>
				<div class="poster-vote-average poster-tooltip">
					<div class="text-center poster-vote-star" ><span class="glyphicon glyphicon-star"></span></div>
					<div class="text-center">{movie.vote_average}</div>
					<div class="poster-tooltip poster-tooltip-text poster-tooltip-vote">votes: {movie.vote_count}</div>
				</div>

				<div class="caption">
					<h3 class="poster-movie-title">{movie.title}</h3>
					<div class="poster-release-date">
						<span class="glyphicon glyphicon-calendar"></span>
						{movie.release_date}
					</div>
					<div class="divider"></div>
					<p class="poster-overview">{movie.overview}</p>
					{this.getButtonAction()}
				</div>
			</div>
		);
	}

	///
	getBackImg(imgBack) {
		if(imgBack) {
			return (<img src={imgBack} alt="image" class="poster-img-back"/>);
		}
		return <div class="poster-div-back"></div>
		
	}

	///
	getButtonAction() {
		const {cardType} = this.props;
		let btn;
		if(cardType === 'watchlist')
			btn = 'remove';
		else if (this.props.watchlist)//wlasciowosc robi za stan komponnentu
			btn = 'ok';
		else 
			btn = 'add';

		if(btn === 'add') {
			return (
				<div class="poster-tooltip div-btn">
					<button class="btn btn-default" 
						onClick={this.props.addMovie}>
						<span class="glyphicon glyphicon-plus"></span>
					</button>
					<div class="poster-tooltip poster-tooltip-text poster-tooltip-btn">add to watchlist</div>
				</div>
			);
		}
		if(btn === 'ok') {
			return (
				<div class="poster-tooltip div-btn">
					<button class="btn btn-default" >
						<span class="glyphicon glyphicon-ok"></span>
					</button>
					<div class="poster-tooltip poster-tooltip-text poster-tooltip-btn">movie on watchlist</div>
				</div>
			);
		}
		if(btn === 'remove') {
			return (
				<div class="poster-tooltip div-btn">
					<button class="btn btn-default" 
						onClick={this.props.removeMovie}>
						<span class="glyphicon glyphicon-remove"></span>
					</button>
					<div class="poster-tooltip poster-tooltip-text poster-tooltip-btn">remove from watchlist</div>
				</div>
			);
		}
	}
}

///
const stateToProps = (state, props) => {
	return {
		watchlist: props.movie.watchlist,
	};
}

const dispatchToProps = (dispatch, props) => {
	return {
		addMovie : () => {
			dispatch(PosterActions.addMovieWatchlist(props.movie));
		},
		removeMovie : () => {
			dispatch(PosterActions.removeMovieWatchlist(props.movie));
		}
	};
}

const MovieCardView = connect(stateToProps, dispatchToProps)(MovieCard);

export default MovieCardView;