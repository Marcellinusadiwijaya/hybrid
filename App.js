import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screen/Login';
import Register from './screen/Register';
import Home from './screen/Home'; 
import nasgorDetail from './screen/nasgorDetail';
import miegorDetail from './screen/miegorDetail';
import bihungorDetail from './screen/bihungorDetail';
import sateDetail from './screen/sateDetail';
import gadoDetail from './screen/gadoDetail';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="nasgorDetail" component={nasgorDetail} />
        <Stack.Screen name="miegorDetail" component={miegorDetail} />
        <Stack.Screen name="bihungorDetail" component={bihungorDetail} />
        <Stack.Screen name="sateDetail" component={sateDetail} />
        <Stack.Screen name="gadoDetail" component={gadoDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;