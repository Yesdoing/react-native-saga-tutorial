import {createStackNavigator} from 'react-navigation-stack';
import {
  StackNavigationOptions,
  StackNavigationProp,
} from 'react-navigation-stack/lib/typescript/src/vendor/types';
import {
  NavigationComponent,
  NavigationRoute,
  NavigationParams,
} from 'react-navigation';
import { StyleProp, ViewStyle, TextStyle } from 'react-native';
import { Color } from '../constants/Colors';

export const createStack = (
  screen: NavigationComponent<
    StackNavigationOptions,
    StackNavigationProp<NavigationRoute<NavigationParams>, NavigationParams>
  >,
  title: string,
) =>
  createStackNavigator({
    Screen: {
      screen,
      navigationOptions: {
        title,
        ...headerStyles
      },
    },
  });

interface IHeaderStyles {
  headerStyle: StyleProp<ViewStyle>
  headerTitleStyle: StyleProp<TextStyle>
  headerTintColor: string
}

export const headerStyles: IHeaderStyles = {
  headerStyle: {
    backgroundColor: Color.BG_COLOR,
    borderBottomWidth: 0
  },
  headerTitleStyle: {
    color: Color.TINT_COLOR
  },
  headerTintColor: Color.TINT_COLOR
}