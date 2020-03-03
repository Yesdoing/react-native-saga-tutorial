import {createStackNavigator} from 'react-navigation-stack';
import TabNavigation from './TabNavigation';
import DetailScreen from '../screens/Detail';
import {createAppContainer} from 'react-navigation';
import {headerStyles} from './config';

const MainNavigation = createStackNavigator(
	{
		Tabs: {
			screen: TabNavigation,
			navigationOptions: {
				headerShown: false,
			},
		},
		Detail: {
			screen: DetailScreen,
			navigationOptions: {
				...headerStyles,
				headerBackTitleVisible: false,
				headerTitle: '',
			},
		},
	},
	{
		headerMode: 'screen',
	},
);

export default createAppContainer(MainNavigation);
