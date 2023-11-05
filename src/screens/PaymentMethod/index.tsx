import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CartNavigatorParamList } from 'navigation/types';
import { SCREENS } from 'constants/screen-names';
import MainLayout from 'layouts/MainLayout';
import Typography from 'components/Typography';
import {
  FlatList,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import assets from 'assets';
import styles from './styles';

type PaymentMethodProps = NativeStackScreenProps<
  CartNavigatorParamList,
  typeof SCREENS.PAYMENT_METHOD
>;

const data = [
  {
    id: 1,
    image: assets.images.paypal,
    cardNo: '2121 6352 8465 ****',
    isPrimary: true,
  },
  {
    id: 2,
    image: assets.images.visa,
    cardNo: '2121 6352 8465 ****',
    isPrimary: false,
  },
  {
    id: 3,
    image: assets.images.mastercard,
    cardNo: '2121 6352 8465 ****',
    isPrimary: false,
  },
].sort((a) => (a.isPrimary ? -1 : 1));

type PaymentMethodScreen = React.FC<PaymentMethodProps>;

const PaymentMethod: PaymentMethodScreen = ({ navigation }) => {
  return (
    <MainLayout type="core" showBackIcon>
      <Typography variant="heading2" style={styles.title}>
        Payment Method
      </Typography>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          const handlePress = () => {
            navigation.navigate(SCREENS.CONFIRM_ORDER);
          };
          return (
            <TouchableOpacity
              onPress={handlePress}
              // disabled={!item.isPrimary}
              style={[styles.card, !item.isPrimary && styles.notPrimaryCard]}
            >
              <TouchableHighlight onPress={handlePress}>
                <Image
                  source={item.image}
                  resizeMode="contain"
                  style={styles.cardImage}
                />
              </TouchableHighlight>
              <View style={styles.cardContent}>
                <Typography
                  variant="body3"
                  style={[!item.isPrimary && styles.notPrimary]}
                >
                  {item.cardNo}
                </Typography>
                {item.isPrimary && (
                  <Typography variant="caption" style={[styles.primary]}>
                    Primary
                  </Typography>
                )}
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

export default PaymentMethod;
