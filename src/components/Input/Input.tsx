import React from 'react';
import { View, TextInput, TouchableOpacity, Image } from 'react-native';

import { Colors } from 'styles';

import type { InputComponent } from './input.types';
import styles from './styles';

const Input: InputComponent = (props) => {
  const {
    containerStyle,
    imageStyle,
    textInputStyle,
    image,
    icon,
    iconContainerStyle,
    onIconPress,
    ...restInput
  } = props;

  return (
    <View style={[styles.container, containerStyle ?? {}]}>
      {image && (
        <View style={styles.imageContainerStyle}>
          <Image
            source={image}
            style={[styles.image, imageStyle ?? {}]}
            resizeMode="contain"
          />
        </View>
      )}

      <TextInput
        style={[styles.textInputStyle, textInputStyle ?? {}]}
        autoCapitalize="none"
        autoCorrect={false}
        placeholderTextColor={Colors.typography20}
        {...restInput}
      />
      {icon && (
        <TouchableOpacity
          onPress={onIconPress}
          style={[styles.iconContainer, iconContainerStyle ?? {}]}
        >
          {icon}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Input;
