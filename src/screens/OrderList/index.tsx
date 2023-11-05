import { FlatList } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { OrderNavigatorParamList } from 'navigation/types';
import { SCREENS } from 'constants/screen-names';
import styles from './styles';
import Typography from 'components/Typography';
import data from 'data';
import OrderItem from 'components/OrderItem';
import { OrderStatus } from 'components/OrderItem/OrderItem';
import MainLayout from 'layouts/MainLayout';

type OrderListProps = NativeStackScreenProps<
  OrderNavigatorParamList,
  typeof SCREENS.ORDER_LIST
>;

type OrderListScreen = React.FC<OrderListProps>;

const OrderList: OrderListScreen = () => {
  return (
    <MainLayout type="core" showBackIcon>
      <Typography variant="heading2">Your Orders</Typography>

      <FlatList
        data={data.orders}
        renderItem={({ item }) => (
          <OrderItem {...item} status={item.status as OrderStatus} />
        )}
        keyExtractor={(item) => item.id.toString()}
        style={styles.orderList}
      />
    </MainLayout>
  );
};

export default OrderList;
