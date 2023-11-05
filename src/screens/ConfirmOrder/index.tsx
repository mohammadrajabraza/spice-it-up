import { SafeAreaView, View } from 'react-native';
import React from 'react';
import styles from './styles';
import TopBackground from 'components/TopBackground';
import Typography from 'components/Typography';
import CartSummary from 'components/CartSummary/CartSummary';
import { Colors } from 'styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CartNavigatorParamList } from 'navigation/types';
import { SCREENS } from 'constants/screen-names';

type ConfirmOrderProps = NativeStackScreenProps<
  CartNavigatorParamList,
  typeof SCREENS.CONFIRM_ORDER
>;

type ConfirmOrderScreen = React.FC<ConfirmOrderProps>;

const ConfirmOrder: ConfirmOrderScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TopBackground showBackIcon type="core" />
      <View style={styles.wrapper}>
        <Typography variant="heading2" style={styles.title}>
          Confirm Order
        </Typography>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Typography variant="caption" style={styles.heading}>
              Deliver To
            </Typography>
            <Typography variant="caption" style={{ color: Colors.red }}>
              Edit
            </Typography>
          </View>
          {/* <Typography variant="body2" style={styles.content}>
            123, Lorem Ipsum, Lorem Street, Lorem City, Lorem State, 123456
          </Typography> */}
        </View>
        <CartSummary
          buttonText="Confirm Order"
          onSubmit={() => {}}
          style={{ container: { marginTop: 'auto' } }}
        />
      </View>
    </SafeAreaView>
  );
};

export default ConfirmOrder;
