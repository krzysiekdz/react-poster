import {PosterAction} from '../actions/posterActions';

export default function reducer(state={
	moviesSearch: [],
	moviesUpcoming: [],
	moviesTopRated: [],
	moviesWatchlist: [],
	fetchedSearch: false,
	fetchedUpcoming: false,
	fetchedWatchlist: false,
	fetchedTopRated: false,
	fetching: false,
}, action) {

	switch(action.type) {
		case PosterAction.SEARCH : {
			return {
				...state,
				moviesSearch: action.payload,
				fetching: false,
				fetchedSearch: true,
			}
		}

		case PosterAction.SEARCH_START : {
			let newObj = Object.assign({}, state);
			newObj.fetching = true;
			return newObj;
		}

		case PosterAction.GET_TOP_RATED : {
			return {
				...state,
				moviesTopRated: action.payload,
				fetching: false,
				fetchedTopRated: true,
			}
		}

		case PosterAction.GET_WATCHLIST : {
			return {
				...state,
				moviesWatchlist: action.payload,
				fetching: false,
				fetchedWatchlist: true,
			}
		}

		case PosterAction.GET_UPCOMING : {
			return {
				...state,
				moviesUpcoming: action.payload,
				fetching: false,
				fetchedUpcoming: true,
			}
		}

		case PosterAction.ADD_MOVIE_WATCHLIST : {
			return {
				...state,
				moviesWatchlist: [...state.moviesWatchlist, action.payload],
			}
		}

		case PosterAction.REMOVE_MOVIE_WATCHLIST : {
			let id = action.payload;
			let res = toggleMovieToAdd(state.moviesSearch, id);
			res = res ? true : toggleMovieToAdd(state.moviesUpcoming, id);
			res = res ? true : toggleMovieToAdd(state.moviesTopRated, id);
			return {
				...state,
				moviesWatchlist: state.moviesWatchlist.filter(m => m.id !== id),
			}
		}

		default: 
			return state;
	}
}

function toggleMovieToAdd(arr, id) {
	for(let i = 0; i < arr.length; i++) {
		if(arr[i].id === id) {
			arr[i].watchlist = false;
			return true;
		}
	}
	return false;
}