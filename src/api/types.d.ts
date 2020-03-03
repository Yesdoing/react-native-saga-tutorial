interface IMoviePopularResponse {
	poster_path: String | null
	adult: Boolean
	overview: String
	release_date: String
	genre_ids: [Number]
	id: Number
	original_title: String
	original_language: String
	title: String
	backdrop_path: String | null
	popularity: Number
	vote_count: Number
	video: Boolean
	vote_average: Number
}

interface IMovieUpcomingResponse {
	poster_path: String | null
	adult: Boolean
	overview: String
	release_date: String
	genre_ids: [Number]
	id: Number
	original_title: String
	original_language: String
	title: String
	backdrop_path: String | null
	popularity: Number
	vote_count: Number
	video: Boolean
	vote_average: Number
}

interface IMovieNowPlayingResponse {
	poster_path: String | null
	adult: Boolean
	overview: String
	release_date: String
	genre_ids: [Number]
	id: Number
	original_title: String
	original_language: String
	title: String
	backdrop_path: String | null
	popularity: Number
	video: Boolean
	vote_average: Number
}

interface IMovieDetailResponse {
	adult: Boolean
	backdrop_path: String | null
	belongs_to_collection: any
	budget: Number
	genres: [{ id: Number; name: String }]
	homepage: String | null
	id: Number
	imdb_id: String | null
	original_language: String
	original_title: String
	overview: String | null
	popularity: Number
	poster_path: String | null
	production_companies: [
		{
			id: Number
			name: String
			logo_path: String | null
			origin_country: String
		},
	]
	production_countries: [{ iso_3166_1: String; name: String }]
	release_date: String
	revenue: Number
	runtime: Number | null
	spoken_languages: [{ iso_639_1: String; name: String }]
	status: String
	tagline: String | null
	title: String
	video: Boolean
	vote_average: Number
	vote_count: Number
}

interface ISearchMovieResposne {
	poster_path: String | null
	adult: Boolean
	overview: String
	release_date: String
	genre_ids: [Number]
	id: Number
	original_title: String
	original_language: String
	title: String
	backdrop_path: String | null
	popularity: Number
	vote_count: Number
	video: Boolean
	vote_average: Number
}

interface ITVDetailResponse {
	backdrop_path: String
	created_by: [
		{
			id: Number
			credit_id: String
			name: String
			gender: Number
			profile_path: String
		},
	]
	episode_run_time: [Number]
	first_air_date: String
	genres: [
		{
			id: Number
			name: String
		},
	]
	homepage: String
	id: Number
	in_production: Boolean
	languages: [String]
	last_air_date: String
	last_episode_to_air: {
		air_date: String
		episode_number: Number
		id: Number
		name: String
		overview: String
		production_code: String
		season_number: Number
		show_id: Number
		still_path: String
		vote_average: Number
		vote_count: Number
	}
	name: String
	next_episode_to_air: null
	networks: [
		{
			name: String
			id: Number
			logo_path: String
			origin_country: String
		},
	]
	number_of_episodes: Number
	number_of_seasons: Number
	origin_country: [String]
	original_language: String
	original_name: String
	overview: String
	popularity: Number
	poster_path: String
	production_companies: [
		{
			id: Number
			logo_path: String
			name: String
			origin_country: String
		},
	]
	seasons: [
		{
			air_date: String
			episode_count: Number
			id: Number
			name: String
			overview: String
			poster_path: String
			season_number: Number
		},
	]
	status: String
	type: String
	vote_average: Number
	vote_count: Number
}

interface ITVPopularResponse {
	poster_path: String
	popularity: Number
	id: Number
	backdrop_path: String | null
	vote_average: Number
	overview: String
	first_air_date: String
	origin_country: [String]
	genre_ids: [Number]
	original_language: String
	vote_count: Number
	name: String
	original_name: String
}

interface ITVTopRateResponse {
	poster_path: String
	popularity: Number
	id: Number
	backdrop_path: String | null
	vote_average: Number
	overview: String
	first_air_date: String
	origin_country: [String]
	genre_ids: [Number]
	original_language: String
	vote_count: Number
	name: String
	original_name: String
}

interface ITVAiringTodayResponse {
	poster_path: String
	popularity: Number
	id: Number
	backdrop_path: String | null
	vote_average: Number
	overview: String
	first_air_date: String
	origin_country: [String]
	genre_ids: [Number]
	original_language: String
	vote_count: Number
	name: String
	original_name: String
}

interface ISearchTVResponse {
	poster_path: String
	popularity: Number
	id: Number
	backdrop_path: String | null
	vote_average: Number
	overview: String
	first_air_date: String
	origin_country: [String]
	genre_ids: [Number]
	original_language: String
	vote_count: Number
	name: String
	original_name: String
}
