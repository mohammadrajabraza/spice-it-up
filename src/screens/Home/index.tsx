import { View } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MenuNavigatorParamList } from 'navigation/types';
import { SCREENS } from 'constants/screen-names';
import Typography from 'components/Typography';
import styles from './styles';


export type HomeProps = NativeStackScreenProps<
  MenuNavigatorParamList,
  typeof SCREENS.HOME
>;

export type HomeScreen = React.FC<HomeProps>;

const Home: HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Typography variant="heading2">Find Your Favorite Food</Typography>
    </View>
  );
};
export default Home;
