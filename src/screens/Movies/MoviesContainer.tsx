import React, { useState, useEffect } from 'react'
import MoviesPresenter from './MoviesPresenter'
import { NavigationStackProp } from 'react-navigation-stack'
import { useDispatch, useSelector } from 'react-redux'
import {
	popularRequest,
	upcomingRequest,
	nowPlayingRequest,
} from '../../modules/movies'
import { RootState } from '../../modules'

function MoviesContainer({ navigation }): React.FC<NavigationStackProp> {
	const dispatch = useDispatch()

	const loading = useSelector((state: RootState) => state.movies?.loading)
	const popular = useSelector((state: RootState) => state.movies?.popular)
	const upcoming = useSelector((state: RootState) => state.movies?.upcoming)
	const nowPlaying = useSelector((state: RootState) => state.movies?.nowPlaying)
	const error = useSelector((state: RootState) => state.movies?.error)

	useEffect(() => {
		dispatch(popularRequest())
		dispatch(upcomingRequest())
		dispatch(nowPlayingRequest())
	}, [])

	return (
		<MoviesPresenter
			loading={loading}
			popular={popular}
			upcoming={upcoming}
			nowPlaying={nowPlaying}
		/>
	)
}

export default MoviesContainer
