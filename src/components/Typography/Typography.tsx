import { Text, TextStyle } from 'react-native';
import React from 'react';
import { TypographyVariants, TypogrpahyComponent } from './typography.types';
import { moderateScale } from 'utils/styles';
import { Colors } from 'styles';

export const typographyVariants: Record<TypographyVariants, TextStyle> = {
  heading2: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    color: Colors.black,
    lineHeight: moderateScale(26),
    letterSpacing: 0.5,
  },
  heading1: {
    fontSize: moderateScale(27),
    fontWeight: 'bold',
    color: Colors.black,
    lineHeight: moderateScale(26),
    letterSpacing: 0.5,
  },
  body1: {
    fontSize: moderateScale(15),
    fontWeight: 'normal',
    color: Colors.black,
    lineHeight: moderateScale(20),
    letterSpacing: 0.5,
  },
  body2: {
    fontSize: moderateScale(16),
    fontWeight: 'normal',
    color: Colors.black,
    lineHeight: moderateScale(30),
    letterSpacing: 0.5,
  },
  body3: {
    fontSize: moderateScale(14),
    fontWeight: 'normal',
    color: Colors.black,
    lineHeight: moderateScale(28),
    letterSpacing: 0.3,
  },
  caption: {
    fontSize: moderateScale(14),
    fontWeight: 'bold',
    color: Colors.typography20,
    opacity: 0.8,
    lineHeight: moderateScale(28),
    letterSpacing: 0.3,
  },
  button: {
    fontSize: moderateScale(16),
    fontWeight: 'normal',
    color: Colors.black,
    lineHeight: moderateScale(20),
  },
};

const Typography: TypogrpahyComponent = (props) => {
  const { variant, style, children, ...rest } = props;
  const variantStyles = typographyVariants[variant];
  return (
    <Text style={[variantStyles, style]} {...rest}>
      {children}
    </Text>
  );
};

export default Typography;
