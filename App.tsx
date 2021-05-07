import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {FasilitasScreen, HomeScreen} from './screens';
import {Theme} from './assets/styles';
import ProgramPendidikanScreen from './screens/ProgramPendidikanScreen';
import Staff from './screens/Staff';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer theme={Theme}>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerStyle={{backgroundColor: Theme.colors.background}}
        edgeWidth={50}
        screenOptions={{
          headerShown: true,
          headerStyle: {backgroundColor: Theme.colors.primary},
          headerTintColor: Theme.colors.secondary,
        }}>
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: 'TEKNIK GEOLOGI UNPAD',
          }}
        />
        <Drawer.Screen name="Fasilitas" component={FasilitasScreen} />
        <Drawer.Screen
          name="Program Pendidikan"
          component={ProgramPendidikanScreen}
        />
        <Drawer.Screen name="Pejabat dan Staff Prodi" component={Staff} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
