import React from 'react';
import { StyleSheet, View } from "react-native";

const PlaceCard = () => {
    return (
        <View style={styles.container}>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {   
        zIndex: 1, 
        backgroundColor: 'red',
        width: 300,
        height: 200,
        borderRadius: 10,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2,
        },  
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        bottom: 0,
    },
});

export default PlaceCard;