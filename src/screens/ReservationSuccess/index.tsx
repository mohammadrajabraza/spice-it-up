import { View, ImageBackground, Image } from 'react-native';
import React from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { NavigationProp } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

import type {
  CoreNavigatorParamList,
  ReservationNavigatorParamList,
} from 'navigation/types';
import { NAVIGATORS, SCREENS } from 'constants/screen-names';

import assets from 'assets';
import { Colors } from 'styles';
import Typography from 'components/Typography';
import Button from 'components/Button';

import styles from './styles';

type ReservationSuccessProps = NativeStackScreenProps<
  ReservationNavigatorParamList,
  typeof SCREENS.RESERVATION_SUCCESS
>;

type ReservationSuccessScreen = React.FC<ReservationSuccessProps>;

const ReservationSuccess: ReservationSuccessScreen = ({ navigation }) => {
  const coreNavigation =
    useNavigation<NavigationProp<CoreNavigatorParamList>>();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={assets.images.authBackground}
        style={styles.background}
        resizeMode="contain"
      >
        <Image
          source={assets.images.success}
          resizeMode="contain"
          style={styles.successImage}
        />
      </ImageBackground>

      <View style={styles.contentContainer}>
        <View style={styles.content}>
          <Typography variant="heading1" style={styles.heading}>
            {'Thankyou for\nReservation!'}
          </Typography>
          <Typography variant="body2" style={styles.text}>
            {
              'Your booking has been confirmed for Wednesday 14th Oct, 11:00 PM.\nYou have booked table for two persons.'
            }
          </Typography>
        </View>
        <View style={styles.footer}>
          <Button
            variant="outlined"
            color="primary"
            title="Home"
            onPress={() => {
              coreNavigation.navigate(NAVIGATORS.MENU, {
                screen: SCREENS.HOME,
              });
            }}
          />
          <Button
            variant="contained"
            color="primary"
            title="Book More Table"
            style={{ text: { color: Colors.white } }}
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default ReservationSuccess;
