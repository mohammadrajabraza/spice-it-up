import {
  ImageSourcePropType,
  TouchableHighlight,
  Image,
  View,
  Pressable,
} from 'react-native';
import React from 'react';
import CartQuantity from 'components/CartQuantity';
import Typography from 'components/Typography';

import styles from './styles';

type CartItemProps = {
  id: number;
  name: string;
  price: number;
  image: ImageSourcePropType;
  description: string;
  quantity: number;
  onPress?: () => void;
  onIncrement: () => void;
  onDecrement: () => void;
};

const CartItem: React.FC<CartItemProps> = (props) => {
  const {
    name,
    price,
    description,
    image,
    quantity,
    onIncrement,
    onDecrement,
  } = props;
  return (
    <Pressable style={styles.container}>
      <TouchableHighlight style={styles.imageContainer}>
        <Image source={image} style={styles.image} resizeMode="cover" />
      </TouchableHighlight>
      <View style={styles.content}>
        <Typography variant="body2" style={styles.name}>{name}</Typography>
        <Typography variant="body3" style={styles.description}>
          {description}
        </Typography>
        <Typography variant="caption" style={styles.price}>
          {'$ ' + price}
        </Typography>
      </View>
      <CartQuantity
        count={quantity}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        style={{ container: styles.cartQuantityContainer }}
      />
    </Pressable>
  );
};

export default CartItem;
