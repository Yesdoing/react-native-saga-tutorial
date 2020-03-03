import axios, { AxiosPromise } from 'axios'

const api = axios.create({
	baseURL: 'https://api.themoviedb.org/3/',
	params: { api_key: 'a191d9dd99cfe9b7ca0476784cf2393a', language: 'en-US' },
})

export const movies = {
	getMovie: (id: number): AxiosPromise<IMovieDetailResponse> =>
		api
			.get(`movie/${id}`, { params: { append_to_response: 'videos' } })
			.then(({ data }) => data.results),
	getPopular: (): AxiosPromise<IMoviePopularResponse> =>
		api.get('movie/popular').then(({ data }) => data.results),
	getUpcoming: (): AxiosPromise<IMovieUpcomingResponse> =>
		api.get('movie/upcoming').then(({ data }) => data.results),
	getNowPlaying: (): AxiosPromise<IMovieNowPlayingResponse> =>
		api.get('movie/now_playing').then(({ data }) => data.results),
	searchMovies: (term: string): AxiosPromise<ISearchMovieResposne> =>
		api
			.get('search/movie', {
				params: {
					query: encodeURIComponent(term),
				},
			})
			.then(({ data }) => data.results),
}

export const tv = {
	getShow: (id: number): Promise<ITVDetailResponse> =>
		api
			.get(`tv/${id}`, { params: { append_to_response: 'videos' } })
			.then(({ data }) => data.results),
	getPopular: (): Promise<ITVPopularResponse> =>
		api.get('tv/popular').then(({ data }) => data.results),
	getTopRated: (): Promise<ITVTopRateResponse> =>
		api.get('tv/top_rated').then(({ data }) => data.results),
	getAiringToday: (): Promise<ITVAiringTodayResponse> =>
		api.get('tv/airing_today').then(({ data }) => data.results),
	searchTv: (term: string): Promise<ISearchTVResponse> =>
		api
			.get('search/tv', {
				params: {
					query: encodeURIComponent(term),
				},
			})
			.then(({ data }) => data.results),
}
