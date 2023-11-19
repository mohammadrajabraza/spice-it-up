import { NavigationProp } from "@react-navigation/native";
import { CoreNavigatorParamList } from "navigation/types";
import { ImageSourcePropType } from "react-native"

export type EmptyListFallbackProps = {
  image: ImageSourcePropType;
  title: string;
  description: string;
  navigation: NavigationProp<CoreNavigatorParamList>
}

export type EmptyListFallbackComponent = (props: EmptyListFallbackProps) => JSX.Element