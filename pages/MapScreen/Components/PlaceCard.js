import React from 'react';
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const PlaceCard = ({image,title,type,description,address,schedule}) => {
    const navigation = useNavigation();
    return (
        <Pressable onPress={() => navigation.navigate('CardPlace',{image,title,type,description,address,schedule})}>
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <Image 
                    src={image}
                    style={{width: '100%', height: '100%'}}
                />
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.title}>
                    {title}
                </Text>
                <Text numberOfLines={4} ellipsizeMode='tail' style={styles.description}>
                    {description}
                </Text>
                <Text style={styles.scheduleText}>
                    {schedule} 
                </Text>
            </View>
        </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {   
        zIndex: 1, 
        flexDirection: 'row',
        backgroundColor: '#111213',
        width: width - 20,
        height: 170,
        borderRadius: 10,
        bottom: 0,
        justifyContent: 'center',
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 15,
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
        color: '#9D9797',
        fontWeight: 'bold',
    },
    description: {
        height: '60%',
        fontSize: 15,
        color: '#ABABAB',
        maxWidth: '100%',
        maxHeight: '100%',
        marginTop: 5,
    },
    scheduleText: {
        marginTop: 5,
        fontSize: 15,
        color: '#9EFC8E',
    },
});

export default PlaceCard;