import { all, take, call, put } from 'redux-saga/effects'
import { movies } from '../api/api'

const MOIVE_REQUEST = 'movies/MOIVE_REQUEST' as const
const MOVIE_SUCCESS = 'movies/MOVIE_SUCCESS' as const
const MOVIE_FAILURE = 'movies/MOVIE_FAILURE' as const

const POPULAR_REQUEST = 'movies/POPULAR_REQUEST' as const
const POPULAR_SUCCESS = 'movies/POPULAR_SUCCESS' as const
const POPULAR_FAILURE = 'movies/POPULAR_FAILURE' as const

const UPCOMING_REQUEST = 'movies/UPCOMING_REQUEST' as const
const UPCOMING_SUCCESS = 'movies/UPCOMING_SUCCESS' as const
const UPCOMING_FAILURE = 'movies/UPCOMING_FAILURE' as const

const NOW_PLAYING_REQUEST = 'moives/NOW_PLAYING_REQUEST' as const
const NOW_PLAYING_SUCCESS = 'movies/NOW_PLAYING_SUCCESS' as const
const NOW_PLAYING_FAILURE = 'movies/NOW_PLAYING_FAILURE' as const

const SEARCH_MOVIES_REQUEST = 'moives/SEARCH_MOVIES_REQUEST' as const
const SEARCH_MOVIES_SUCCESS = 'movies/SEARCH_MOVIES_SUCCESS' as const
const SEARCH_MOVIES_FAILURE = 'movies/SEARCH_MOVIES_FAILURE' as const

const LOADING_START = 'movies/LOADING_START' as const
const LOADING_END = 'movies/LOADING_END' as const

export const movieRequest = (id: number) => ({
	type: MOIVE_REQUEST,
	payload: id,
})

export const movieSuccess = (movie: IMovieDetailResponse) => ({
	type: MOVIE_SUCCESS,
	payload: movie,
})

export const movieFailure = (errorMsg: string) => ({
	type: MOVIE_FAILURE,
	payload: errorMsg,
})

export const popularRequest = () => ({
	type: POPULAR_REQUEST,
})

export const popularSuccess = (movie: IMoviePopularResponse) => ({
	type: POPULAR_SUCCESS,
	payload: movie,
})

export const popularFailure = (errorMsg: string) => ({
	type: POPULAR_FAILURE,
	payload: errorMsg,
})

export const upcomingRequest = () => ({
	type: UPCOMING_REQUEST,
})

export const upcomingSuccess = (movie: IMovieUpcomingResponse) => ({
	type: UPCOMING_SUCCESS,
	payload: movie,
})

export const upcomingFailure = (errorMsg: string) => ({
	type: UPCOMING_FAILURE,
	payload: errorMsg,
})

export const nowPlayingRequest = () => ({
	type: NOW_PLAYING_REQUEST,
})

export const nowPlayingSuccess = (movie: IMovieNowPlayingResponse) => ({
	type: NOW_PLAYING_SUCCESS,
	payload: movie,
})

export const nowPlayingFailure = (errorMsg: string) => ({
	type: NOW_PLAYING_FAILURE,
	payload: errorMsg,
})

export const searchMoviesRequest = (term: string) => ({
	type: SEARCH_MOVIES_REQUEST,
	payload: term,
})

export const searchMoviesSuccess = (movie: ISearchMovieResposne) => ({
	type: SEARCH_MOVIES_SUCCESS,
	payload: movie,
})

export const searchMoviesFailure = (errorMsg: string) => ({
	type: SEARCH_MOVIES_FAILURE,
	payload: errorMsg,
})

export const loadingStart = () => ({
	type: LOADING_START,
})

export const loadingEnd = () => ({
	type: LOADING_END,
})

export type MoviesAction =
	| ReturnType<typeof movieSuccess>
	| ReturnType<typeof movieFailure>
	| ReturnType<typeof popularSuccess>
	| ReturnType<typeof popularFailure>
	| ReturnType<typeof upcomingSuccess>
	| ReturnType<typeof upcomingFailure>
	| ReturnType<typeof nowPlayingSuccess>
	| ReturnType<typeof nowPlayingFailure>
	| ReturnType<typeof searchMoviesSuccess>
	| ReturnType<typeof searchMoviesFailure>
	| ReturnType<typeof loadingStart>
	| ReturnType<typeof loadingEnd>

export type MoviesState = {
	upcoming: [IMovieUpcomingResponse] | []
	popular: [IMoviePopularResponse] | []
	nowPlaying: [IMovieNowPlayingResponse] | []
	searchMovies: [ISearchMovieResposne] | []
	movie: IMovieDetailResponse | null
	loading: boolean
	error: string
}

const initialState: MoviesState = {
	upcoming: [],
	popular: [],
	nowPlaying: [],
	searchMovies: [],
	movie: null,
	loading: false,
	error: '',
}

function moviesReducer(
	state = initialState,
	action: MoviesAction,
): MoviesState {
	switch (action.type) {
		case MOVIE_SUCCESS:
			return { ...state, movie: action.payload }
		case POPULAR_SUCCESS:
			return { ...state, popular: action.payload }
		case NOW_PLAYING_SUCCESS:
			return { ...state, nowPlaying: action.payload }
		case SEARCH_MOVIES_SUCCESS:
			return { ...state, searchMovies: action.payload }
		case UPCOMING_SUCCESS:
			return { ...state, upcoming: action.payload }
		case LOADING_START:
			return { ...state, loading: true }
		case LOADING_END:
			return { ...state, loading: false }
		case MOVIE_FAILURE:
		case POPULAR_FAILURE:
		case NOW_PLAYING_FAILURE:
		case UPCOMING_FAILURE:
		case SEARCH_MOVIES_FAILURE:
			return { ...state, error: action.payload }
		default:
			return state
	}
}

function* getMovies() {
	while (true) {
		const { payload } = yield take('movies/MOVIE_REQUEST')

		yield put({ type: 'LOADING_START' })
		try {
			const movie = yield call(movies.getMovie, payload)
			if (movie) {
				yield put({ type: 'movies/MOVIE_SUCCESS', payload: movie })
			}
		} catch (error) {
			yield put({ type: 'movies/MOVIE_FAILURE', payload: error.message })
		} finally {
			yield put({ type: 'LOADING_END' })
		}
	}
}

function* getPopular() {
	while (true) {
		yield take('movies/POPULAR_REQUEST')

		yield put({ type: 'LOADING_START' })
		try {
			const movie = yield call(movies.getPopular)
			if (movie) {
				yield put(popularSuccess(movie))
			}
		} catch (error) {
			yield put({ type: 'movies/POPULAR_FAILURE', payload: error.message })
		} finally {
			yield put({ type: 'LOADING_END' })
		}
	}
}

function* getUpcoming() {
	while (true) {
		yield take('movies/UPCOMING_REQUEST')

		yield put({ type: 'LOADING_START' })
		try {
			const movie = yield call(movies.getUpcoming)
			if (movie) {
				yield put({ type: 'movies/UPCOMING_SUCCESS', payload: movie })
			}
		} catch (error) {
			yield put({ type: 'movies/UPCOMING_FAILURE', payload: error.message })
		} finally {
			yield put({ type: 'LOADING_END' })
		}
	}
}

function* getNowPlaying() {
	while (true) {
		yield take(NOW_PLAYING_REQUEST)

		yield put({ type: 'LOADING_START' })
		try {
			const movie = yield call(movies.getNowPlaying)
			if (movie) {
				yield put(nowPlayingSuccess(movie))
			}
		} catch (error) {
			yield put({ type: 'movies/NOW_PLAYING_FAILURE', payload: error.message })
		} finally {
			yield put({ type: 'LOADING_END' })
		}
	}
}

function* getSearchMovies() {
	while (true) {
		const { payload } = yield take('movies/SEARCH_MOIVES_REQUEST')

		yield put({ type: 'LOADING_START' })
		try {
			const movie = yield call(movies.searchMovies, payload)
			if (movie) {
				yield put({ type: 'movies/SEARCH_MOIVES_SUCCESS', payload: movie })
			}
		} catch (error) {
			yield put({
				type: 'movies/SEARCH_MOIVES_FAILURE',
				payload: error.message,
			})
		} finally {
			yield put({ type: 'LOADING_END' })
		}
	}
}

export function* moivesSaga() {
	yield all([
		getMovies(),
		getPopular(),
		getUpcoming(),
		getNowPlaying(),
		getSearchMovies(),
	])
}

export default moviesReducer
