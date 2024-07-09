import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeScreen} from '../screens/Home/Home.js';

const Stack = createNativeStackNavigator();

export const Navigation = ({
  initialRouteName,
}) => {
  return (
    <>
      <Stack.Navigator
        initialRouteName={initialRouteName}
        screenOptions={{
          headerShown: false,
          orientation: 'portrait',
        }}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
        />
      </Stack.Navigator>
    </>
  );
};
