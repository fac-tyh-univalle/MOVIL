import { StyleSheet } from 'react-native';

const LandingScreenStyles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
        width: '100%',
        height: '100%',
    },
    textContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        height: '100%',
        marginTop: 200,
        marginLeft: 20,
    },
    text: {
        fontSize: 50,
        color: 'white',
        textAlign: 'left',
        lineHeight: 80,
        marginTop: 100,
    },
    button: {
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'yellow',
        borderRadius: 50,
        width: '40%',
        height: '7%',
        marginRight: 40,
        marginBottom: 100,
    },
    buttonText: {
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold',
    },
});

export default LandingScreenStyles;