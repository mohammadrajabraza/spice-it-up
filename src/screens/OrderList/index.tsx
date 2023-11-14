import { FlatList } from 'react-native';
import React from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { OrderNavigatorParamList } from 'navigation/types';
import type { SCREENS } from 'constants/screen-names';

import Typography from 'components/Typography';
import data from 'data';
import OrderItem from 'components/OrderItem';
import type { OrderStatus } from 'components/OrderItem/OrderItem';
import MainLayout from 'layouts/MainLayout';

import styles from './styles';
import NoOrder from './NoOrder';

type OrderListProps = NativeStackScreenProps<
  OrderNavigatorParamList,
  typeof SCREENS.ORDER_LIST
>;

type OrderListScreen = React.FC<OrderListProps>;

const OrderList: OrderListScreen = () => (
  <MainLayout type="core" showBackIcon>
    <Typography variant="heading2">Your Orders</Typography>

    {data.orders.length === 0 ? (
      <NoOrder />
    ) : (
      <FlatList
        data={data.orders}
        renderItem={({ item }) => (
          <OrderItem {...item} status={item.status as OrderStatus} />
        )}
        keyExtractor={(item) => item.id.toString()}
        style={styles.orderList}
      />
    )}
  </MainLayout>
);

export default OrderList;
