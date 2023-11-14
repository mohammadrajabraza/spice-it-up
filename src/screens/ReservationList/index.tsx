import { View, Image, SectionList, TouchableOpacity } from 'react-native';
import React from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { ReservationNavigatorParamList } from 'navigation/types';
import { SCREENS } from 'constants/screen-names';
import MainLayout from 'layouts/MainLayout';
import Typography from 'components/Typography';

import assets from 'assets';

import PersonsIcon from 'assets/svgs/persons.svg';
import { moderateScale } from 'utils/styles';
import Button from 'components/Button';
import { Dimensions, Spacing } from 'styles';

import styles from './styles';

type ReservationListProps = NativeStackScreenProps<
  ReservationNavigatorParamList,
  typeof SCREENS.RESERVATION_LIST
>;

type ReservationListScreen = React.FC<ReservationListProps>;

const sections = [
  {
    title: '14, Oct',
    data: [
      {
        id: 1,
        time: '11:00 PM',
        date: 'Friday, 14th Oct',
        noOfPersons: 2,
      },
      {
        id: 5,
        time: '11:00 PM',
        date: 'Friday, 14th Oct',
        noOfPersons: 2,
      },
    ],
  },
  {
    title: '19, Oct',
    data: [
      {
        id: 2,
        time: '17:00 PM',
        date: 'Wednesday, 19th Oct',
        noOfPersons: 12,
      },
      {
        id: 3,
        time: '10:00 PM',
        date: 'Wednesday, 19th Oct',
        noOfPersons: 2,
      },
      {
        id: 4,
        time: '10:00 PM',
        date: 'Wednesday, 19th Oct',
        noOfPersons: 2,
      },
    ],
  },
];

const iconSize = moderateScale(25);

const ReservationList: ReservationListScreen = ({ navigation }) => (
  <MainLayout type="core">
    <View style={styles.header}>
      <Typography variant="heading2" style={styles.title}>
        Reservations
      </Typography>
      <View style={styles.profile}>
        <Image source={assets.images.smallLogo} resizeMode="contain" />
      </View>
    </View>

    <SectionList
      sections={sections}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.card}>
          <View style={styles.cardLeft}>
            <Typography variant="body3" style={styles.persons}>
              Reservation
            </Typography>

            <Typography variant="body3" style={styles.date}>
              {item.date}
            </Typography>
            <View style={styles.personsContainer}>
              <PersonsIcon width={iconSize} height={iconSize} />
              <Typography variant="body3" style={styles.persons}>
                {`${item.noOfPersons} Persons`}
              </Typography>
            </View>
          </View>
          <View>
            <Typography variant="body3" style={styles.time}>
              {item.time}
            </Typography>
          </View>
        </TouchableOpacity>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <Typography variant="caption" style={styles.sectionHeader}>
          {title}
        </Typography>
      )}
      style={styles.list}
      stickyHeaderHiddenOnScroll
    />

    <Button
      variant="contained"
      color="primary"
      title="Make Reservation"
      style={{
        button: {
          // flex: 0.3,
          bottom: Dimensions.height.size10,
          height: Dimensions.height.size8,
          width:
            Dimensions.width.size100 -
            Spacing.horizontal.globalHorizontalPadding * 2,
        },
      }}
      onPress={() => {
        navigation.navigate(SCREENS.CREATE_RESERVATION);
      }}
    />
  </MainLayout>
);

export default ReservationList;
