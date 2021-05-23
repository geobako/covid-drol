import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  LayoutAnimation,
  ImageBackground,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Splashscreen = ({setShowApp}) => {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
      if (showLogo === true) {
        setShowLogo(prev => !prev);
      }
    }, 3000);
  }, []);

  useEffect(() => {
    if (showLogo === false) {
      setTimeout(() => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        setShowApp(true);
      }, 3000);
    }
  }, [showLogo]);

  return (
    <View style={styles.container}>
      {showLogo ? (
        <Image style={styles.logo} source={require('../../assets/logo.jpeg')} />
      ) : (
        <ImageBackground
          style={styles.imgBackground}
          source={require('../../assets/covid.jpeg')}>
          <Text style={styles.text}>Covid-19 App</Text>
          <Text style={styles.name}>Sotiris Droulias</Text>
        </ImageBackground>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  imgBackground: {
    width: windowWidth,
    height: windowHeight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: windowWidth,
  },
  text: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  name: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 40,
  },
});

export default Splashscreen;
