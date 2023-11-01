import {
  View,
  ImageSourcePropType,
  Image,
  TouchableHighlight,
} from 'react-native';
import React from 'react';
import styles from './styles';
import Typography from 'components/Typography';

type CategoryItemProps = {
  image: ImageSourcePropType;
  name: string;
};

const CategoryItem: React.FC<CategoryItemProps> = (props) => {
  const { image, name } = props;
  return (
    <View style={styles.container}>
      <TouchableHighlight style={styles.imageContainer}>
        <Image source={image} resizeMode="cover" style={styles.image} />
      </TouchableHighlight>
      <Typography variant="body2" style={{ flex: 1, justifyContent: 'center' }}>
        {name}
      </Typography>
    </View>
  );
};

export default CategoryItem;
