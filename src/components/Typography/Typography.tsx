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
