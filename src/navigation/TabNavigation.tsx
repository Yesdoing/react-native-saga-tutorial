import React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import MoviesScreen from '../screens/Movies';
import TVScreen from '../screens/TV';
import SearchScreen from '../screens/Search';
import {createAppContainer} from 'react-navigation';
import {Color} from '../constants/Colors';
import TabBarIcon from '../components/TabBarIcon';
import {createStack} from './config';

interface ITabBarIconProps {
  focused: boolean;
}

const TabNavigation = createBottomTabNavigator(
  {
    Movie: {
      screen: createStack(MoviesScreen, 'Movie'),
      navigationOptions: {
        tabBarIcon: ({focused}: ITabBarIconProps) => (
          <TabBarIcon
            name={Platform.OS === 'ios' ? 'ios-film' : 'md-film'}
            focused={focused}
          />
        ),
      },
    },
    TV: {
      screen: createStack(TVScreen, 'TV'),
      navigationOptions: {
        tabBarIcon: ({focused}: ITabBarIconProps) => (
          <TabBarIcon
            name={Platform.OS === 'ios' ? 'ios-tv' : 'md-tv'}
            focused={focused}
          />
        ),
      },
    },
    Search: {
      screen: createStack(SearchScreen, 'Search'),
      navigationOptions: {
        tabBarIcon: ({focused}: ITabBarIconProps) => (
          <TabBarIcon
            name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'}
            focused={focused}
          />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
      style: {
        backgroundColor: Color.BG_COLOR,
      },
    },
  },
);

export default createAppContainer(TabNavigation);
