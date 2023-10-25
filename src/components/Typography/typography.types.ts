import { type JSX } from 'react';
import { TextProps } from 'react-native';

export type TypographyVariants = 'heading1' | 'heading2';

export interface TypographyProps extends TextProps {
  variant: TypographyVariants;
  children: string;
}
export type TypogrpahyComponent = (props: TypographyProps) => JSX.Element;
