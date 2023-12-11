import { FlatList, View } from 'react-native';
import React from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { OrderNavigatorParamList } from 'navigation/types';
import type { SCREENS } from 'constants/screen-names';

import Typography from 'components/Typography';
import data from 'data';
import OrderItem from 'components/OrderItem';
import type { OrderStatus } from 'components/OrderItem/OrderItem';
import MainLayout from 'layouts/MainLayout';

import Radio from 'components/Radio';

import styles from './styles';
import NoOrder from './NoOrder';

type OrderListProps = NativeStackScreenProps<
  OrderNavigatorParamList,
  typeof SCREENS.ORDER_LIST
>;

type OrderListScreen = React.FC<OrderListProps>;

const OrderList: OrderListScreen = () => {
  const [isEmpty, setIsEmpty] = React.useState(data.orders.length === 0);
  return (
    <MainLayout type="core" showBackIcon>
      <View style={styles.header}>
        <Typography variant="heading2">Your Orders</Typography>
        <View style={styles.emptyRadio}>
          <Typography variant="caption">Show Empty</Typography>
          <Radio
            selected={isEmpty}
            onPress={() => setIsEmpty((isPrevEmpty: boolean) => !isPrevEmpty)}
          />
        </View>
      </View>

      {isEmpty ? (
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
};

export default OrderList;
