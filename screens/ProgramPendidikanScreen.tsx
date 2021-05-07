import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import KurikulumScreen from './KurikulumScreen';
import ProfilLulusanScreen from './ProfilLulusanScreen';
import ProgPendidikanHomeScreen from './ProgPendidikanHomeScreen';

export type RootParamList = {
  Home: {};
  ProfilLulusan: {};
  Kurikulum: {};
};

const ProgramPendidikanScreen = () => {
  const Stack = createStackNavigator<RootParamList>();
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen
        name="Home"
        options={{headerTitle: 'Program Pendidikan'}}
        component={ProgPendidikanHomeScreen}
      />
      <Stack.Screen name="Kurikulum" component={KurikulumScreen} />
      <Stack.Screen name="ProfilLulusan" component={ProfilLulusanScreen} />
    </Stack.Navigator>
  );
};

export default ProgramPendidikanScreen;
