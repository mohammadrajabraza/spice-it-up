import { styled } from 'styled-components/native';

import { Dimensions } from 'styles';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${(props) => props.theme.colors.white};
`;

export const SplashLogo = styled.Image`
  width: ${Dimensions.width.size75}px;
  height: ${Dimensions.height.size25}px;
  transform: translateY(-${Dimensions.height.size25 / 2}px);
`;
