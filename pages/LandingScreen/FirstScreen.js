import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { ImageBackground } from 'react-native';
import LandingScreenStyles from './Styles/LandingScreenStyles';

const FirstScreen = (props) => {
    const handlePress = () => {
        props.navigation.navigate('Seg');
    };

    return (
        <ImageBackground
            source={require('./Assets/background-image.png')}
            style={LandingScreenStyles.backgroundImage}
        >
            <View style={LandingScreenStyles.textContainer}>
                <Text style={LandingScreenStyles.text}>Explora la belleza de Cochabamba</Text>
            </View>

            <Pressable style={LandingScreenStyles.button} onPress={handlePress}>
                <Text style={LandingScreenStyles.buttonText}>ESTOY LISTO</Text>
            </Pressable>
        </ImageBackground>
    );
}    


export default FirstScreen;