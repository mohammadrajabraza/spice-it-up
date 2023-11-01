import { View, ImageSourcePropType, Image, TouchableHighlight } from 'react-native';
import React from 'react';
import styles from './styles';
import Typography from 'components/Typography';

type TodaysSpecialItemProps = {
  name: string;
  price: string;
  image: ImageSourcePropType;
};

const TodaysSpecialItem: React.FC<TodaysSpecialItemProps> = (props) => {
  const { name, image, price } = props;
  return (
    <View style={styles.item}>
      <TouchableHighlight style={styles.imageContainer}>
      <Image source={image} resizeMode="cover" style={styles.image} />

      </TouchableHighlight>
      <View style={styles.content}>
        <Typography variant="body3">{name}</Typography>
        <Typography
          variant="body3"
          style={styles.price}
        >
          {price}
        </Typography>
      </View>
    </View>
  );
};

export default TodaysSpecialItem;
