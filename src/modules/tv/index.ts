export const TV_REQUEST = 'tv/TV_REQUEST' as const
export const TV_SUCCESS = 'tv/TV_SUCCESS' as const
export const TV_FAILURE = 'tv/TV_FAILURE' as const

export const POPULAR_REQUEST = 'tv/POPULAR_REQUEST' as const
export const POPULAR_SUCCESS = 'tv/POPULAR_SUCCESS' as const
export const POPULAR_FAILURE = 'tv/POPULAR_FAILURE' as const

export const AIRING_TODAY_REQUEST = 'tv/AIRING_TODAY_REQUEST' as const
export const AIRING_TODAY_SUCCESS = 'tv/AIRING_TODAY_SUCCESS' as const
export const AIRING_TODAY_FAILURE = 'tv/AIRING_TODAY_FAILURE' as const

export const TOP_RATED_REQUEST = 'tv/TOP_RATED_REQUEST' as const
export const TOP_RATED_SUCCESS = 'tv/TOP_RATED_SUCCESS' as const
export const TOP_RATED_FAILURE = 'tv/TOP_RATED_FAILURE' as const

export const SEARCH_TV_REQUEST = 'tv/SEARCH_TV_REQUEST' as const
export const SEARCH_TV_SUCCESS = 'tv/SEARCH_TV_SUCCESS' as const
export const SEARCH_TV_FAILURE = 'tv/SEARCH_TV_FAILURE' as const

export const TV_NAVIGATION_HOME = 'tv/TV_NAVIGATION_HOME' as const

export const LOADING_START = 'tv/LOADING_START' as const
export const LOADING_END = 'tv/LOADING_END' as const

export const tvRequest = (id: number) => ({
	type: TV_REQUEST,
	payload: id,
})

export const tvSuccess = (tv: ITVDetailResponse) => ({
	type: TV_SUCCESS,
	payload: tv,
})

export const tvFailure = (errorMsg: string) => ({
	type: TV_FAILURE,
	payload: errorMsg,
})

export const popularRequest = () => ({
	type: POPULAR_REQUEST,
})

export const popularSuccess = (tv: ITVPopularResponse) => ({
	type: POPULAR_SUCCESS,
	payload: tv,
})

export const popularFailure = (errorMsg: string) => ({
	type: POPULAR_FAILURE,
	payload: errorMsg,
})

export const airingTodayRequest = () => ({
	type: AIRING_TODAY_REQUEST,
})

export const airingTodaySuccess = (tv: ITVAiringTodayResponse) => ({
	type: AIRING_TODAY_SUCCESS,
	payload: tv,
})

export const airingTodayFailure = (errorMsg: string) => ({
	type: AIRING_TODAY_FAILURE,
	payload: errorMsg,
})

export const topRatedRequest = () => ({
	type: TOP_RATED_REQUEST,
})

export const topRatedSuccess = (tv: ITVTopRateResponse) => ({
	type: TOP_RATED_SUCCESS,
	payload: tv,
})

export const topRatedFailure = (errorMsg: string) => ({
	type: TOP_RATED_FAILURE,
	payload: errorMsg,
})

export const searchTVRequest = (term: string) => ({
	type: SEARCH_TV_REQUEST,
	payload: term,
})

export const searchTVSuccess = (tv: ISearchTVResponse) => ({
	type: SEARCH_TV_SUCCESS,
	payload: tv,
})

export const searchTVFailure = (errorMsg: string) => ({
	type: SEARCH_TV_FAILURE,
	payload: errorMsg,
})

export const loadingStart = () => ({
	type: LOADING_START,
})

export const loadingEnd = () => ({
	type: LOADING_END,
})

export type TVAction =
	| ReturnType<typeof tvSuccess>
	| ReturnType<typeof tvFailure>
	| ReturnType<typeof popularSuccess>
	| ReturnType<typeof popularFailure>
	| ReturnType<typeof airingTodaySuccess>
	| ReturnType<typeof airingTodayFailure>
	| ReturnType<typeof topRatedSuccess>
	| ReturnType<typeof topRatedFailure>
	| ReturnType<typeof searchTVSuccess>
	| ReturnType<typeof searchTVFailure>
	| ReturnType<typeof loadingStart>
	| ReturnType<typeof loadingEnd>

type TVState = {
	airingToday: [ITVAiringTodayResponse] | []
	popular: [ITVPopularResponse] | []
	topRated: [ITVTopRateResponse] | []
	searchTV: [ISearchTVResponse] | []
	tv: ITVDetailResponse | null
	loading: boolean
	error: string
}

const initialState: TVState = {
	airingToday: [],
	popular: [],
	topRated: [],
	searchTV: [],
	tv: null,
	loading: false,
	error: '',
}

function tvReducer(state = initialState, action: TVAction): TVState {
	switch (action.type) {
		case TV_SUCCESS:
			return { ...state, tv: action.payload }
		case POPULAR_SUCCESS:
			return { ...state, popular: action.payload }
		case AIRING_TODAY_SUCCESS:
			return { ...state, airingToday: action.payload }
		case SEARCH_TV_SUCCESS:
			return { ...state, searchTV: action.payload }
		case TOP_RATED_SUCCESS:
			return { ...state, topRated: action.payload }
		case LOADING_START:
			return { ...state, loading: true }
		case LOADING_END:
			return { ...state, loading: false }
		case TV_FAILURE:
		case POPULAR_FAILURE:
		case AIRING_TODAY_FAILURE:
		case SEARCH_TV_FAILURE:
		case TOP_RATED_FAILURE:
			return { ...state, error: action.payload }
		default:
			return state
	}
}

export default tvReducer
