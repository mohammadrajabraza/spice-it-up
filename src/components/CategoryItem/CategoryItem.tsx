import {
  ImageSourcePropType,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './styles';
import Typography from 'components/Typography';

type CategoryItemProps = {
  image: ImageSourcePropType;
  name: string;
  onPress: () => void
};

const CategoryItem: React.FC<CategoryItemProps> = (props) => {
  const { image, name, onPress } = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <TouchableHighlight onPress={onPress} style={styles.imageContainer}>
        <Image source={image} resizeMode="cover" style={styles.image} />
      </TouchableHighlight>
      <Typography variant="body2" style={{ flex: 1, justifyContent: 'center' }}>
        {name}
      </Typography>
    </TouchableOpacity>
  );
};

export default CategoryItem;
