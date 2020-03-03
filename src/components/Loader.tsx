import React from 'react';
import styled from 'styled-components/native';
import {Color} from '../constants/Colors';
import {ActivityIndicator} from 'react-native';

const Container = styled.View`
	flex: 1;
	background-color: ${Color.BG_COLOR};
	justify-content: center;
`;

function Loader() {
	return (
		<Container>
			<ActivityIndicator color={Color.TINT_COLOR} />
		</Container>
	);
}

export default Loader;
