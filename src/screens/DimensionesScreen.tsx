import React from 'react';
import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import {Dimensions} from 'react-native';

//const {width, height} = Dimensions.get('window'); No cambia las dimensiones si se voltea el celular

export const DimensionesScreen = () => {

    const {width, height} = useWindowDimensions(); // si cambia las dimensiones si se voltea el celular

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.cajaMorada}></View>
        <View style={styles.cajaNaranja}></View>
      </View>
      <Text style={styles.title}>
        W: {width}, H: {height}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '60%',
    backgroundColor: 'red',
  },
  cajaMorada: {
    backgroundColor: '#5856D6',
    width: '50%',
    height: '50%',
  },
  cajaNaranja: {
    backgroundColor: 'F0A23B',
  },
  title: {
    fontSize: 30,
    textAlign: 'center'
  },
});
