import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { ImageBackground } from 'react-native';
import LandingScreenStyles from './Styles/LandingScreenStyles';

// Renderiza el componente que consiste en la primera pantalla de la aplicación, la cual contiene un botón que nos lleva a la segunda pantalla.
const FirstScreen = (props) => {
    // Función para navegar a la segunda pantalla
    const handlePress = () => {
        props.navigation.navigate('Seg');
    };

    // Renderiza el componente
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