import type { ImageSourcePropType } from 'react-native';
import { Image, ImageBackground } from 'react-native';
import React from 'react';

import assets from 'assets';

import GoBack from 'components/GoBack';
import { Layouts } from 'styles';

import styles from './styles';

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

const TopBackground: React.FC<TopBackgroundProps> = React.memo(
  ({ type, showBackIcon, ...rest }) => (
    <>
      {showBackIcon && <GoBack />}

      <ImageBackground
        source={
          type === 'custom' ? rest.image : assets.images[`${type}Background`]
        }
        style={[styles.background, type === 'core' ? { ...Layouts.over } : {}]}
        resizeMode="cover"
      >
        {type === 'auth' ? (
          <Image
            source={assets.images.authLogo}
            style={styles.authLogo}
            resizeMode="contain"
          />
        ) : null}
      </ImageBackground>
    </>
  ),
);

export default TopBackground;
