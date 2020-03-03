import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import Loader from '../../components/Loader'
import MovieSlider from '../../components/MovieSlider'

interface IMoviesPresenterProps {
	loading: boolean
	popular: [IMoviePopularResponse]
	upcoming: [IMovieUpcomingResponse]
	nowPlaying: [IMovieNowPlayingResponse]
}

const MoviesPresenter: React.FC<IMoviesPresenterProps> = ({
	loading,
	popular,
	upcoming,
	nowPlaying,
}) => <>{loading ? <Loader /> : <MovieSlider moives={nowPlaying} />}</>

export default MoviesPresenter
