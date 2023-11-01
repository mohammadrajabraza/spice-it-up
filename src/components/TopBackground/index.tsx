import { Image, ImageBackground } from 'react-native';
import React, { memo } from 'react';
import assets from 'assets';
import styles from './styles';
import GoBack from 'components/GoBack';

type TopBackgroundProps = {
  type: 'auth' | 'core'
  showBackIcon?: boolean;
};

const TopBackground: React.FC<TopBackgroundProps> = memo(({
  type,
  showBackIcon,
}) => {
  return (
    <ImageBackground
      source={assets.images[`${type}Background`]}
      style={styles.background}
      resizeMode="cover"
    >
      {showBackIcon && <GoBack />}
      {type === 'auth' ? <Image source={assets.images.authLogo} style={styles.authLogo} resizeMode='contain' /> : null}
    </ImageBackground>
  );
});

export default TopBackground;
