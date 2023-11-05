import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CartNavigatorParamList } from 'navigation/types';
import { SCREENS } from 'constants/screen-names';
import MainLayout from 'layouts/MainLayout';
import Typography from 'components/Typography';
import { FlatList, Image, TouchableOpacity, View } from 'react-native';
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
  },
  {
    id: 2,
    type: 'Office',
    address: '4517 Washington Ave. Manchester, Kentucky 39495',
  },
];

console.log(data);

type LocationScreen = React.FC<LocationProps>;

const Location: LocationScreen = ({ navigation }) => {
  return (
    <MainLayout type="core" showBackIcon>
      <Typography variant="heading2" style={styles.title}>
        Location
      </Typography>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate(SCREENS.PAYMENT_METHOD)}
              style={[styles.card]}
            >
              <Typography variant="caption" style={styles.text}>
                {item.type + ' Address'}
              </Typography>
              <View style={styles.cardContent}>
                <Image
                  source={assets.images.locationMarker}
                  resizeMode="contain"
                  style={styles.cardImage}
                />
                <Typography variant="body3">{item.address}</Typography>
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.id.toString()}
        style={styles.list}
      />
    </MainLayout>
  );
};

export default Location;
