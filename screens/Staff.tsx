import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {View, Text} from 'react-native';
import StaffDetailScreen from './StaffDetailScreen';
import StaffListScreen from './StaffListScreen';

export type RootParamList = {
  List: {};
  Detail: {nip: string};
};

const Staff = () => {
  const StaffStack = createStackNavigator<RootParamList>();
  return (
    <StaffStack.Navigator headerMode={'none'}>
      <StaffStack.Screen name="List" component={StaffListScreen} />
      <StaffStack.Screen name="Detail" component={StaffDetailScreen} />
    </StaffStack.Navigator>
  );
};

export default Staff;
