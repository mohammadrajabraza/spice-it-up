import { ViewStyle } from "react-native";

export type CounterProps = {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
  style?: { container?: ViewStyle }
};

export type CounterComponent = (props: CounterProps) => JSX.Element