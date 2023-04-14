import * as Font from 'expo-font';

async function loadFonts() {
    await Font.loadAsync({
      'yantramanav': require('../assets/fonts/Yantramanav-Regular.ttf'),
    });
}

export default loadFonts;

