import { View, Image } from 'react-native';
import React from 'react';
import { EmptyListFallbackComponent } from './empty-list-fallback.types';
import styles from './styles';
import Typography from 'components/Typography';
import Button from 'components/Button';
import { NAVIGATORS, SCREENS } from 'constants/screen-names';

const EmptyListFallback: EmptyListFallbackComponent = (props) => {
  const { image, title, description, navigation } = props;

  return (
    <View style={[styles.container]}>
      <View style={styles.imageContainer}>
        <Image source={image} resizeMode="contain" />
      </View>
      <Typography variant="heading1" style={styles.title}>
        {title}
      </Typography>
      <Typography variant="heading2" style={styles.description}>
        {description}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        title="Browse"
        style={{ button: styles.button }}
        onPress={() => {
          navigation.navigate(NAVIGATORS.MENU, {
            screen: SCREENS.HOME,
          });
        }}
      />
    </View>
  );
};

export default EmptyListFallback;
