import React, { useState, useEffect } from 'react'
import { Text } from 'react-native'
import TVPresenter from './TVPresenter'
import { NavigationStackProp } from 'react-navigation-stack'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../modules'
import {
	airingTodayRequest,
	popularRequest,
	topRatedRequest,
} from '../../modules/tv'

interface ITVContainerProps {
	navigation: NavigationStackProp
}

function TVContainer({ navigation }): React.FC<ITVContainerProps> {
	const dispatch = useDispatch()

	const loading = useSelector((state: RootState) => state.tv.loading)
	const airingToday = useSelector((state: RootState) => state.tv.airingToday)
	const popular = useSelector((state: RootState) => state.tv.popular)
	const topRated = useSelector((state: RootState) => state.tv.topRated)
	const error = useSelector((state: RootState) => state.tv.error)

	useEffect(() => {
		dispatch(airingTodayRequest())
		dispatch(popularRequest())
		dispatch(topRatedRequest())
	}, [])

	return (
		<TVPresenter
			loading={loading}
			airingToday={airingToday}
			popular={popular}
			topRated={topRated}
		/>
	)
}

export default TVContainer
