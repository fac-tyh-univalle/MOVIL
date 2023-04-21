import React from 'react';
import { StyleSheet, View, Image, Text } from "react-native";

const PlaceCard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <Image 
                    source={require('../assets/img/placeImg.png')}
                    style={{width: '100%', height: '100%'}}
                />
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.title}>
                    Paseo Aranjuez
                </Text>
                <Text numberOfLines={4} ellipsizeMode='tail' style={styles.description}>
                    El paseo aranjuez es uno de los centros comerciales mas grandes de Cochabamba 
                    en el se encuentran desde salas de cine hasta tiendas de ropa, hay lugares en 
                    los cuales puedes comer, jugar y pasar el rato.
                </Text>
                <Text style={styles.kmText}>
                    2 Km
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {   
        zIndex: 1, 
        flexDirection: 'row',
        backgroundColor: '#111213',
        width: '100%',
        height: '80%',
        borderRadius: 10,
        bottom: 0,
        justifyContent: 'center',
    },
    imgContainer: {
        width: '40%',
        height: '80%',
        borderRadius: 10,
        marginTop: 15,
    },
    infoContainer: {
        width: '50%',
        height: '80%',
        marginTop: 15,
        marginLeft: 15,
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 15,
        color: 'white',
    },
    description: {
        height: '60%',
        fontSize: 15,
        color: '#ABABAB',
        maxWidth: '100%',
        maxHeight: '100%',
        marginTop: 5,
    },
    kmText: {
        marginTop: 5,
        fontSize: 15,
        color: '#3CAFE7',
    },
});

export default PlaceCard;