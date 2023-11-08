import React, { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ReservationNavigatorParamList } from 'navigation/types';
import { SCREENS } from 'constants/screen-names';
import MainLayout from 'layouts/MainLayout';
import Typography from 'components/Typography';
import styles from './styles';
import ProfileInfo from 'components/ProfileInfo';
import Calendar from 'components/Calendar';
import { TouchableOpacity, View } from 'react-native';
import { Dimensions, Layouts, Spacing } from 'styles';

import PersonsIcon from 'assets/svgs/persons.svg';
import PersonIcon from 'assets/svgs/person.svg';
import ChevronDownIcon from 'assets/svgs/chevron-down.svg';
import { moderateScale } from 'utils/styles';
import CartQuantity from 'components/CartQuantity';
import Button from 'components/Button';

type CreateReservationProps = NativeStackScreenProps<
  ReservationNavigatorParamList,
  typeof SCREENS.CREATE_RESERVATION
>;

type CreateReservationScreen = React.FC<CreateReservationProps>;

const iconSize = moderateScale(25);

const CreateReservation: CreateReservationScreen = ({ navigation }) => {
  const [noOfGuests, setNoOfGuests] = useState(1)

  return (
    <MainLayout type="core" showBackIcon scrollView>
      <Typography variant="heading2" style={styles.title}>
        Make Reservations
      </Typography>

      <ProfileInfo />
      <Calendar />

      <View style={[Layouts.card, { marginBottom: Spacing.vertical.size4 }]}>
        <View style={styles.spotRow}>
          <View style={[styles.spot]} />
          <View style={[styles.spot]} />
          <View style={[styles.spot]} />
        </View>
        <View style={styles.spotRow}>
          <View style={[styles.spot]} />
          <View style={[styles.spot, styles.selectedSpot]} />
          <View style={[styles.spot]} />
        </View>
        <View style={styles.spotRow}>
          <View style={[styles.spot]} />
          <View style={[styles.spot]} />
          <View style={[styles.spot]} />
        </View>
      </View>
      <View style={{ gap: 10 }}>
        <TouchableOpacity style={styles.card}>
          <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
            <PersonsIcon width={iconSize} height={iconSize} />
            <Typography variant="body3">No. of Guests</Typography>
          </View>
          <CartQuantity
            count={noOfGuests}
            onIncrement={() => {
              setNoOfGuests(prev => prev + 1)
            }}
            onDecrement={() => {
              setNoOfGuests(prev => prev - 1)
            }}
            style={{ container: { gap: 12 } }}
          />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.card, { marginBottom: Dimensions.height.size20 }]}>
          <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
            <PersonIcon width={iconSize} height={iconSize} />
            <Typography variant="body3">Reference</Typography>
          </View>
          <ChevronDownIcon width={iconSize} height={iconSize} />
        </TouchableOpacity>
      </View>


      <Button
        variant='outlined'
        color='primary'
        title='Cancel'
      />

      <Button
        variant='contained'
        color='primary'
        title='Confirm'
        style={{ button: { marginBottom: Dimensions.height.size5 } }}
        onPress={() => {
          navigation.navigate(SCREENS.RESERVATION_SUCCESS)
        }}
      />
    </MainLayout>
  );
};

export default CreateReservation;
