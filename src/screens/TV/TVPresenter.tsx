import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { NavigationStackProp } from 'react-navigation-stack'
import Loader from '../../components/Loader'
import MovieSlider from '../../components/MovieSlider'

interface ITVPresenterProps {
	loading: boolean
	airingToday: [ITVAiringTodayResponse]
	popular: [ITVPopularResponse]
	topRated: [ITVTopRateResponse]
}

const TVPresenter: React.FC<ITVPresenterProps> = ({
	loading,
	airingToday,
	popular,
	topRated,
}) => <>{loading ? <Loader /> : null}</>

export default TVPresenter
