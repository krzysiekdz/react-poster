import React from 'react';
import {connect} from 'react-redux'
import http from 'superagent'
//import Modal from 'react-modal'

import * as PosterActions from '../../../../actions/posterActions'
import LoadingAnimation from '../../../Widgets/LoadingAnimation'
import Modal from '../../../Widgets/Modal'

//smart componennt
class MovieDetails extends React.Component {
	
	constructor() {
		super();

		this.state = {
			fetching: true,
			movie: null,
			modal: false,
		}

	}

	componentWillMount() {
		const id = this.props.params.movie_id;
		const {API_URL, END_POINTS} = PosterActions;
		let _this = this;
		http.get(`${API_URL}${END_POINTS.GET_MOVIE_DETAILS}/${id}`)
			.end((err, res) => {
				if(err || !res.ok) {
					console.log('something went wrong while getting movie details at /api%s', 
						PosterActions.END_POINTS.GET_MOVIE_DETAILS);
				}
				else { 
					console.log(res.body);
					_this.setState({
						fetching: false,
						movie: res.body,
					});
				}
			});
	}

	render() {
		const {fetching} = this.state;
		return (
			<div>
				{this.renderLoadingAnim(fetching)}
				{this.renderMovieDetails(fetching)}
				{this.renderModal()}
			</div>
		);
	}

	///
	renderLoadingAnim(fetching) {
		if(fetching) {
			return <LoadingAnimation text={'movie details'}/>
		}
	}

	///
	renderMovieDetails(fetching) {
		if(!fetching) {
			return (
				<div class="container well row poster-movie-details" ref="content" onClick={this.handleOffModal.bind(this)}>
					<div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
						{this.renderLeftColumn()}
					</div>
					<div class="col-lg-9 col-md-9 col-sm-12 col-xs-12">
						{this.renderRightColumn()}
					</div>
				</div>
			);
		}
	}

	///
	renderLeftColumn() {
		const {movie} = this.state;
		return (
			<div id='col-left'>
				<div class='movie-poster-img-container' onClick={this.handleClickImg.bind(this)}>
					<img src={movie.poster_path.small} class='movie-poster-img'/>
					<img src={'img/loop.png'} class='loop movie-poster-img' />
				</div>
				<div class="divider" />
				<div class="row">
					<div class="col-md-5 col-lg-5 col-sm-5 col-xs-5 bold text">Rating</div>
					<div class="col-md-7 col-lg-7 col-sm-7 col-xs-7"><span class="badge text">{movie.vote_average}</span></div>
				</div>
				<div class="divider" />
				{this.renderRowColLeft('Released', movie.release_date)}
				{this.renderRowColLeft('Running time', movie.runtime + ' minutes')}
				{this.renderRowColLeft('Budget', '$' + movie.budget)}
				{this.renderRowColLeft('Revenue', '$' + movie.revenue)}
			</div>
		);
	}

	///
	renderRowColLeft(col1, col2) {
		return (
			<div >
				<div class="row">
					<div class="col-md-5 col-lg-5 col-sm-5 col-xs-5 bold text">{col1}</div>
					<div class="col-md-7 col-lg-7 col-sm-7 col-xs-7 text">{col2}</div>
				</div>
				<div class="divider" />
			</div>
		);
	}

	///
	renderRightColumn() {
		const {movie} = this.state;
		return (
			<div id='col-right'>
				{this.renderContent()}
			</div>
		);
	}

	///
	renderContent() {
		let arr = [];
		for(var i = 0; i < 50; i++) {
			arr.push(i);
		}
		return arr.map(i => <p key={i}>right {i}</p>)
	}

	///
	renderModal(){
		const {movie} = this.state;
		if(this.state.modal) {
			return (
				<Modal 
					img={movie.poster_path.medium} 
					onClick={this.handleOffModal.bind(this)}
				/>
			);
		}
	}

	///
	handleOffModal() {
		if(this.state.modal) {
			this.setState({modal: false});
			this.refs.content.classList.remove('low-opacity');
		}
		
	}

	///
	handleClickImg() {
		this.setState({modal: true});
		console.log(this.refs.content);
		this.refs.content.classList.add('low-opacity');
	}

}

///
const stateToProps = (state, props) => {
	return {
		
	};
}

const dispatchToProps = (dispatch, props) => {
	return {
		
	};
}

const MovieDetailsView = connect(stateToProps, dispatchToProps)(MovieDetails);

export default MovieDetailsView;