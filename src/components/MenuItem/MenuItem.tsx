import {
  View,
  ImageSourcePropType,
  TouchableHighlight,
  Image,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from 'react-native';
import React from 'react';
import styles from './styles';
import Typography from 'components/Typography';

type MenuItemProps = {
  name: string;
  description: string;
  image: ImageSourcePropType;
  price: string;
  style?: { container?: ViewStyle; price?: TextStyle };
  onPress?: () => void;
};

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const {
    image,
    price,
    name,
    description,
    style = {},
    onPress = () => {},
  } = props;
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style?.container]}>
      <TouchableHighlight onPress={onPress} style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </TouchableHighlight>
      <View style={styles.content}>
        <Typography variant="body2" style={styles.name}>
          {name}
        </Typography>
        <Typography variant="caption" style={styles.description}>
          {description}
        </Typography>
      </View>
      <Typography
        variant="caption"
        style={{ ...styles.price, ...(style?.price ?? {}) }}
      >
        {price}
      </Typography>
    </TouchableOpacity>
  );
};

export default MenuItem;
