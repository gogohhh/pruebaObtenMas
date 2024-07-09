/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import {StatusBar, Text} from 'react-native';

import store from './src/redux/store';
import {NavigationContainer} from '@react-navigation/native';
import {Navigation} from './src/navigation/Navigation';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <StatusBar
        backgroundColor="transparent"
        barStyle={'light-content'}
        translucent
        animated
      />
      <NavigationContainer fallback={<Text>Loading...</Text>}>
        <Navigation
          initialRouteName={'HomeScreen'}
        />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
