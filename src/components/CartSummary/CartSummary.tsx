import { View, ImageBackground, ViewStyle } from 'react-native';
import React from 'react';
import assets from 'assets';
import Typography from 'components/Typography';
import styles from './styles';
import { Spacing } from 'styles';
import Button from 'components/Button';

type CartSummaryProps = {
  style?: { container?: ViewStyle };
  buttonText: string;
  onSubmit: () => void;
};

const CartSummary: React.FC<CartSummaryProps> = (props) => {
  const { buttonText, onSubmit, style } = props;
  return (
    <ImageBackground
      source={assets.images.subtotalCardBg}
      style={[styles.card, style?.container]}
    >
      <View style={styles.row}>
        <Typography variant="body3" style={styles.heading}>
          Sub-total
        </Typography>
        <Typography variant="heading3" style={styles.content}>
          120 $
        </Typography>
      </View>
      <View style={styles.row}>
        <Typography variant="body3" style={styles.heading}>
          Delivery Charge
        </Typography>
        <Typography variant="heading3" style={styles.content}>
          10 $
        </Typography>
      </View>
      <View style={styles.row}>
        <Typography variant="body3" style={styles.heading}>
          Discount
        </Typography>
        <Typography variant="heading3" style={styles.content}>
          20 $
        </Typography>
      </View>
      <View style={[styles.row, { marginTop: Spacing.vertical.size8 }]}>
        <Typography variant="body1" style={styles.heading}>
          Total
        </Typography>
        <Typography variant="heading2" style={styles.content}>
          10 $
        </Typography>
      </View>

      <Button
        variant="contained"
        color="white"
        title={buttonText}
        style={{
          button: styles.button,
          text: styles.buttonText,
        }}
        onPress={onSubmit}
      />
    </ImageBackground>
  );
};

export default CartSummary;
