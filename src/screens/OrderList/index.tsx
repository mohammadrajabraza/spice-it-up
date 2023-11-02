import { FlatList, SafeAreaView, View } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { OrderNavigatorParamList } from 'navigation/types';
import { SCREENS } from 'constants/screen-names';
import styles from './styles';
import TopBackground from 'components/TopBackground';
import Typography from 'components/Typography';
import data from 'data';
import OrderItem from 'components/OrderItem';
import { OrderStatus } from 'components/OrderItem/OrderItem';

type OrderListProps = NativeStackScreenProps<
  OrderNavigatorParamList,
  typeof SCREENS.ORDER_LIST
>;

type OrderListScreen = React.FC<OrderListProps>;

const OrderList: OrderListScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TopBackground type="core" showBackIcon />
      <View style={styles.wrapper}>
        <Typography variant="heading2">Your Orders</Typography>

        <FlatList
          data={data.orders}
          renderItem={({ item }) => (
            <OrderItem {...item} status={item.status as OrderStatus} />
          )}
          keyExtractor={(item) => item.id.toString()}
          style={styles.orderList}
        />
      </View>
    </SafeAreaView>
  );
};

export default OrderList;
