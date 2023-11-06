import { StyleSheet } from 'react-native';
import { Dimensions, Spacing } from 'styles';

const styles = StyleSheet.create({
  background: {
    width: Dimensions.width.size100,
    height: Dimensions.height.size34,
    alignItems: 'center',
    paddingTop: Spacing.vertical.size64,
  },
  authLogo: {
    width: Dimensions.width.size36,
    height: Dimensions.height.size19,
  },
});

export default styles;
