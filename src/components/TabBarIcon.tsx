import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Color} from '../constants/Colors';

interface ITabBarIconProps {
  name: string;
  focused: boolean;
}

function TabBarIcon({name, focused}: ITabBarIconProps) {
  useEffect(() => {
    Icon.loadFont();
  }, []);
  return (
    <Icon
      size={26}
      name={name}
      color={focused ? Color.ACTIVE_COLOR : Color.INACTIVE_COLOR}
    />
  );
}

export default TabBarIcon;
