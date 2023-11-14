import React from 'react';

import { View, Image } from 'react-native';

import assets from 'assets';
import Typography from 'components/Typography';

import { moderateScale } from 'utils/styles';

import styles from './styles';

export interface ProfileInfoProps {}

const ProfileInfo = (_props: ProfileInfoProps) => (
  <View style={styles.root}>
    <View style={styles.content}>
      <Image
        source={assets.images.profilePic}
        style={{
          width: moderateScale(70),
          height: moderateScale(70),
          alignSelf: 'center',
        }}
        resizeMode="cover"
      />
      <View style={styles.info}>
        <Typography variant="body2" style={styles.name}>
          John Doe
        </Typography>
        <Typography variant="body3" style={styles.email}>
          johndoe@email.com
        </Typography>
        <Typography variant="body3" style={styles.address}>
          +44 111 234 5678
        </Typography>
      </View>
      <Typography variant="body3" style={styles.edit}>
        Edit
      </Typography>
    </View>
  </View>
);

export default ProfileInfo;
