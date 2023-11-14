import type { ImageSourcePropType } from 'react-native';
import { TouchableHighlight, Image, View, Pressable } from 'react-native';
import React from 'react';

import Typography from 'components/Typography';

import strings from 'utils/strings';
import { Colors } from 'styles';
import { moderateScale } from 'utils/styles';

import styles from './styles';

export type OrderStatus = 'cancelled' | 'inprocess' | 'delivered';

type OrderItemProps = {
  name: string;
  price: number;
  image: ImageSourcePropType;
  orderId: number;
  status: OrderStatus;
};

const bgColorForOrderStatus: Record<
  OrderStatus,
  (typeof Colors)[keyof typeof Colors]
> = {
  cancelled: Colors.grey100,
  delivered: Colors.green,
  inprocess: Colors.red,
};

const OrderItem: React.FC<OrderItemProps> = (props) => {
  const { name, price, orderId, image, status } = props;
  return (
    <Pressable style={[styles.container]}>
      <TouchableHighlight style={styles.imageContainer}>
        <Image source={image} style={styles.image} resizeMode="cover" />
      </TouchableHighlight>
      <View style={styles.content}>
        <Typography variant="body3" style={styles.name}>
          {name}
        </Typography>
        <Typography variant="body3" style={styles.orderId}>
          {`# ${orderId}`}
        </Typography>
        <Typography variant="caption" style={styles.price}>
          {`$ ${price}`}
        </Typography>
      </View>
      <View
        style={{
          marginStart: 'auto',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          flex: 1,
          gap: 12,
        }}
      >
        <View
          style={{
            padding: 8,
            backgroundColor: bgColorForOrderStatus[status],
            borderRadius: moderateScale(15),
          }}
        >
          <Typography variant="caption" style={{ color: Colors.white }}>
            {strings.capitalizeFirstLetter(status)}
          </Typography>
        </View>
        {status !== 'inprocess' && (
          <Typography variant="caption" style={{ color: Colors.red }}>
            Reorder
          </Typography>
        )}
      </View>
    </Pressable>
  );
};

export default OrderItem;
