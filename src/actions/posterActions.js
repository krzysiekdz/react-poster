import http from 'superagent';

//------------------- constants

export const API_URL = 'http://localhost:9000/api';

export const END_POINTS = {
	SEARCH: '/movie/search',
	GET_TOP_RATED: '/movie/top_rated',
	GET_UPCOMING: '/movie/upcoming',
	GET_WATCHLIST: '/watchlist',
	ADD_MOVIE_WATCHLIST: '/watchlist',
	REMOVE_MOVIE_WATCHLIST: '/watchlist',
	GET_MOVIE_DETAILS: '/movie/info',
}

export const PosterAction = {
	SEARCH: 'SEARCH_END',
	SEARCH_START: 'SEARCH_START',
	GET_TOP_RATED: 'GET_TOP_RATED',
	GET_UPCOMING: 'GET_UPCOMING',
	GET_WATCHLIST: 'GET_WATCHLIST',
	ADD_MOVIE_WATCHLIST: 'ADD_MOVIE',
	REMOVE_MOVIE_WATCHLIST: 'REMOVE_MOVIE',
}


//------------------ actions

export function searchMovies(query) {
	return dispatch => {
		dispatch({
			type: PosterAction.SEARCH_START,
		});
		http.get(API_URL + END_POINTS.SEARCH)
		.query({query})
		.end((err, res) => {
			if(err || !res.ok)
				console.log('something went wrong while getting /api%s', END_POINTS.SEARCH);
			else {
				dispatch({
					type: PosterAction.SEARCH,
					payload: res.body.results,
				})

				console.log(res.body.results)
			}

		});
	}
}

export function getTopRated() {
	return dispatch => {
		dispatch({
			type: PosterAction.SEARCH_START,
		});
		http.get(API_URL + END_POINTS.GET_TOP_RATED)
			.end((err, res) => {
				if(err || !res.ok)
					console.log('something went wrong while getting /api%s', END_POINTS.GET_TOP_RATED);
				else {
					dispatch({
						type: PosterAction.GET_TOP_RATED,
						payload: res.body.results,
					})
				}
			});
	}
}

export function getUpcoming() {
	return dispatch => {
		dispatch({
			type: PosterAction.SEARCH_START,
		});
		http.get(API_URL + END_POINTS.GET_UPCOMING)
			.end((err, res) => {
				if(err || !res.ok)
					console.log('something went wrong while getting /api%s', END_POINTS.GET_UPCOMING);
				else {
					dispatch({
						type: PosterAction.GET_UPCOMING,
						payload: res.body.results,
					})
				}
			});
	}
}

export function getWatchlist() {
	return dispatch => {
		dispatch({
			type: PosterAction.SEARCH_START,
		});
		http.get(API_URL + END_POINTS.GET_WATCHLIST)
			.end((err, res) => {
				if(err || !res.ok)
					console.log('something went wrong while getting /api%s', END_POINTS.GET_WATCHLIST);
				else {
					dispatch({
						type: PosterAction.GET_WATCHLIST,
						payload: res.body.results,
					})
				}
			});
	}
}

export function addMovieWatchlist(movie) {
	return dispatch => {
		http.put(`${API_URL}${END_POINTS.ADD_MOVIE_WATCHLIST}`)
			.send(movie)
			.end((err, res) => {
				if(err || !res.ok || res.body.status !==0 || !res.body.movie)
					console.log('Something went wrong while putting at /api%s', END_POINTS.ADD_MOVIE_WATCHLIST, err);
				else {
					movie.watchlist = true;
					dispatch({
						type: PosterAction.ADD_MOVIE_WATCHLIST,
						payload: res.body.movie,
					})
				}
			});
	}
}

export function removeMovieWatchlist(movie) {
	return dispatch => {
		http.delete(`${API_URL}${END_POINTS.REMOVE_MOVIE_WATCHLIST}/${movie.id}`)
			.end((err, res) => {
				if(err || !res.ok || res.body.status !== 0 || res.body.moviesRemoved !== 1)
					console.log('something went wrong while deleting at /api%s', END_POINTS.REMOVE_MOVIE_WATCHLIST);
				else {
					movie.watchlist = false;
					dispatch({
						type: PosterAction.REMOVE_MOVIE_WATCHLIST,
						payload: movie.id,
					})
				}
			});
	}
}