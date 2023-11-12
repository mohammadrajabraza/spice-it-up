import {
  ImageSourcePropType,
  TouchableHighlight,
  Image,
  View,
  Pressable,
} from 'react-native';
import React from 'react';
import Counter from 'components/Counter';
import Typography from 'components/Typography';

import styles from './styles';
import { Swipeable } from 'react-native-gesture-handler';
import { Dimensions } from 'styles';
import { moderateScale } from 'utils/styles';

import DeleteIcon from 'assets/svgs/delete.svg';

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


const CartItemRight = () => (
  <Pressable style={styles.rightAction}>
    <DeleteIcon width={moderateScale(24)} height={moderateScale(24)} />
  </Pressable>
)

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
    <Swipeable
      friction={2}
      leftThreshold={Dimensions.width.size15}
      rightThreshold={Dimensions.width.size15}
      shouldCancelWhenOutside
      containerStyle={styles.swiper}
      renderRightActions={CartItemRight}
    >
      <Pressable style={styles.container}>
        <TouchableHighlight style={styles.imageContainer}>
          <Image source={image} style={styles.image} resizeMode="cover" />
        </TouchableHighlight>
        <View style={styles.content}>
          <Typography variant="body3" style={styles.name}>
            {name}
          </Typography>
          <Typography variant="body3" style={styles.description}>
            {description}
          </Typography>
          <Typography variant="caption" style={styles.price}>
            {'$ ' + price}
          </Typography>
        </View>
        <Counter
          count={quantity}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          style={{ container: styles.counter }}
        />
      </Pressable>
    </Swipeable>
  );
};

export default CartItem;
