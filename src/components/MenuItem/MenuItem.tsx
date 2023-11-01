import {
  View,
  Text,
  ImageSourcePropType,
  TouchableHighlight,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './styles';
import Typography from 'components/Typography';

type MenuItemProps = {
  name: string;
  description: string;
  image: ImageSourcePropType;
  price: string;
};

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { image, price, name, description } = props;
  return (
    <TouchableOpacity style={styles.container}>
      <TouchableHighlight style={styles.imageContainer}>
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
      <Typography variant="caption" style={styles.price}>
        {price}
      </Typography>
    </TouchableOpacity>
  );
};

export default MenuItem;
