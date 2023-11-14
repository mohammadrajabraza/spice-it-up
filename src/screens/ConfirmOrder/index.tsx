import React from 'react';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Image, View } from 'react-native';

import Typography from 'components/Typography';
import type { CartNavigatorParamList } from 'navigation/types';
import { SCREENS } from 'constants/screen-names';
import MainLayout from 'layouts/MainLayout';

import assets from 'assets';
import CartSummary from 'components/CartSummary';
import { Dimensions } from 'styles';

import styles from './styles';

type ConfirmOrderProps = NativeStackScreenProps<
  CartNavigatorParamList,
  typeof SCREENS.CONFIRM_ORDER
>;

type ConfirmOrderScreen = React.FC<ConfirmOrderProps>;

const ConfirmOrder: ConfirmOrderScreen = ({ navigation }) => (
  <MainLayout type="core" showBackIcon scrollView>
    <Typography variant="heading2" style={styles.title}>
      Confirm Order
    </Typography>
    <View style={{ flex: 1, zIndex: 1000 }}>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Typography variant="body3" style={styles.cardTitle}>
            Deliver To
          </Typography>
          <Typography variant="body3" style={styles.editText}>
            Edit
          </Typography>
        </View>
        <View style={styles.cardContent}>
          <Image
            source={assets.images.locationMarker}
            resizeMode="contain"
            style={styles.cardLocationImage}
          />
          <Typography variant="body3" style={styles.contentText}>
            007 Bond Ave. Manchester, Kentucky 007, UK
          </Typography>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Typography variant="body3" style={styles.cardTitle}>
            Payment Method
          </Typography>
          <Typography variant="body3" style={styles.editText}>
            Edit
          </Typography>
        </View>
        <View style={[styles.cardContent, { justifyContent: 'space-between' }]}>
          <Image
            source={assets.images.paypal}
            resizeMode="contain"
            style={styles.cardPaymentImage}
          />
          <Typography variant="body3">2121 6352 8465 ****</Typography>
        </View>
      </View>

      <CartSummary
        style={{ container: { marginTop: Dimensions.height.size15 } }}
        buttonText="Confirm Order"
        onSubmit={() => {
          navigation.navigate(SCREENS.ORDER_SUCCESS);
        }}
      />
    </View>
  </MainLayout>
);

export default ConfirmOrder;
