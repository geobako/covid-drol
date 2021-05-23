/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  UIManager,
  Platform,
  View,
} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Splashscreen from './src/screens/splashscreen';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SearchCountries from './src/screens/search-countries';

const Stack = createStackNavigator();

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const App = () => {
  const [showApp, setShowApp] = useState(false);

  return (
    <View style={{flex: 1}}>
      {showApp ? (
        <SafeAreaProvider>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                options={{title: 'Select country'}}
                name="Search"
                component={SearchCountries}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      ) : (
        <Splashscreen setShowApp={setShowApp} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
