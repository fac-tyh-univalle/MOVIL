import React from 'react';
import { StyleSheet } from 'react-native';
import Lottie from 'lottie-react-native';

export default function Loader() {
  return (
    <Lottie 
        style={styles.loader}
        source={require('../assets/9921-loader.json')} autoPlay loop 
    />
  );
}

const styles = StyleSheet.create({
    loader: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 170,
    }
});

