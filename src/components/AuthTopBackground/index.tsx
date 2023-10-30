import { Image, ImageBackground } from 'react-native';
import React from 'react';
import assets from 'assets';
import styles from './styles';
import GoBack from 'components/GoBack';

type AuthTopBackgroundProps = {
  showBackIcon?: boolean;
};

const AuthTopBackground: React.FC<AuthTopBackgroundProps> = ({
  showBackIcon,
}) => {
  return (
    <ImageBackground
      source={assets.images.authBackground}
      style={styles.authBackground}
      resizeMode="cover"
    >
      {showBackIcon && <GoBack />}
      <Image source={assets.images.authLogo} style={styles.authLogo} />
    </ImageBackground>
  );
};

export default AuthTopBackground;
