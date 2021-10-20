import React from 'react';
import {SafeAreaView} from 'react-native';
import { PositionScreen } from './src/screens/PositionScreen';
//import {DimensionesScreen} from './src/screens/DimensionesScreen';
//import {BoxObjectModelScreen} from './src/screens/BoxObjectModelScreen';
//import {HolaMundoScreen} from './src/screens/HolaMundoScreen';
//import { ContadorScreen } from './src/screens/ContadorScreen';

export const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <PositionScreen />
    </SafeAreaView>
  );
};
