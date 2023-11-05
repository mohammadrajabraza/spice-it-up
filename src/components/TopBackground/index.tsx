import { Image, ImageBackground, ImageSourcePropType } from 'react-native';
import React, { memo } from 'react';
import assets from 'assets';
import styles from './styles';
import GoBack from 'components/GoBack';

export type TopBackgroundProps = {
  showBackIcon?: boolean;
} & (
  | {
      type: 'auth';
      image?: never;
    }
  | { type: 'core'; image?: never }
  | { type: 'custom'; image: ImageSourcePropType }
);

const TopBackground: React.FC<TopBackgroundProps> = memo(
  ({ type, showBackIcon, ...rest }) => {
    return (
      <ImageBackground
        source={
          type === 'custom' ? rest.image : assets.images[`${type}Background`]
        }
        style={styles.background}
        resizeMode="cover"
      >
        {showBackIcon && <GoBack />}

        {type === 'auth' ? (
          <Image
            source={assets.images.authLogo}
            style={styles.authLogo}
            resizeMode="contain"
          />
        ) : null}
      </ImageBackground>
    );
  },
);

export default TopBackground;
