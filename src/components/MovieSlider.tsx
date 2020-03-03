import React from 'react'
import styled from 'styled-components/native'
import Swiper from 'react-native-swiper'
import { View, Text } from 'react-native'
import Layout from '../constants/Layout'

interface IMovieSlider {
	movies:
		| [IMovieNowPlayingResponse]
		| [IMoviePopularResponse]
		| [IMovieUpcomingResponse]
}

const MovieSlider: React.FC<IMovieSlider> = ({ movies }) => (
	<Swiper
		showsPagination={false}
		autoplay={true}
		style={{ height: Layout.height / 3 }}>
		<View>
			<Text>one</Text>
		</View>
		<View>
			<Text>two</Text>
		</View>
		<View>
			<Text>three</Text>
		</View>
	</Swiper>
)

export default MovieSlider
