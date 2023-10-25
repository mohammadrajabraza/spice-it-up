import 'styled-components/native';
import { ColorsType } from 'styles/colors';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: ColorsType;
  }
}
