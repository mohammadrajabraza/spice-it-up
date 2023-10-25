import { View, Text } from 'react-native';
import React from 'react';
import styles from './styles';

type ButtonProps = {};

type ButtonComponent = React.FC<ButtonProps>;

const Button: ButtonComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Button</Text>
    </View>
  );
};

export default Button;
