import React from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { FlatList, Image, TouchableOpacity, View } from 'react-native';

import type { CartNavigatorParamList } from 'navigation/types';
import { SCREENS } from 'constants/screen-names';
import MainLayout from 'layouts/MainLayout';
import Typography from 'components/Typography';
import assets from 'assets';

import styles from './styles';

type LocationProps = NativeStackScreenProps<
  CartNavigatorParamList,
  typeof SCREENS.LOCATION
>;

const data = [
  {
    id: 1,
    type: 'Home',
    address: '8502 Preston Rd. Inglewood, Maine 98380',
    isPrimary: true,
  },
  {
    id: 2,
    type: 'Office',
    address: '4517 Washington Ave. Manchester, Kentucky 39495',
    isPrimary: false,
  },
];

type LocationScreen = React.FC<LocationProps>;

const Location: LocationScreen = ({ navigation }) => (
  <MainLayout type="core" showBackIcon>
    <Typography variant="heading2" style={styles.title}>
      Location
    </Typography>
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(SCREENS.PAYMENT_METHOD)}
          style={[styles.card]}
        >
          <Typography variant="caption" style={styles.text}>
            {`${item.type} Address`}
          </Typography>
          <View style={styles.cardContent}>
            <Image
              source={assets.images.locationMarker}
              resizeMode="contain"
              style={styles.cardImage}
            />
            <Typography variant="body3" style={styles.address}>
              {item.address}
            </Typography>
          </View>
          {item.isPrimary ? (
            <Typography variant="caption" style={styles.primary}>
              Primary
            </Typography>
          ) : null}
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id.toString()}
      style={styles.list}
    />
  </MainLayout>
);

export default Location;
