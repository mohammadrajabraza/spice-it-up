import { Image, ImageBackground } from 'react-native';
import React from 'react';
import assets from 'assets';
import styles from './styles';

const AuthTopBackground = () => {
  return (
    <ImageBackground
      source={assets.images.authBackground}
      style={styles.authBackground}
      resizeMode="cover"
    >
      <Image source={assets.images.authLogo} style={styles.authLogo} />
    </ImageBackground>
  );
};

export default AuthTopBackground;
