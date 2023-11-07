import { View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CartNavigatorParamList } from 'navigation/types';
import { SCREENS } from 'constants/screen-names';
import styles from './styles';
import assets from 'assets';
import Typography from 'components/Typography';
import Input from 'components/Input';

import EditIcon from 'assets/svgs/edit.svg';
import { moderateScale } from 'utils/styles';
import Button from 'components/Button';

import StarSelected from 'assets/svgs/star-selected.svg';
import StarUnselected from 'assets/svgs/star-unselected.svg';

const iconSize = moderateScale(25);

export type FeedbackProps = NativeStackScreenProps<
  CartNavigatorParamList,
  typeof SCREENS.FEEDBACK
>;

export type FeedbackScreen = React.FC<FeedbackProps>;

const Feedback: FeedbackScreen = () => {
  const [rating, setRating] = useState(2);

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={assets.images.authBackground}
        resizeMode="contain"
      >
        <View style={styles.logoContainer}>
          <Image
            source={assets.images.authLogo}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
      </ImageBackground>

      <View style={styles.contentContainer}>
        <View style={styles.header}>
          <Typography variant="heading1" style={styles.title}>
            {'Thank You!\nEnjoy Your Meal'}
          </Typography>
          <Typography variant="body3" style={styles.description}>
            Please rate your food
          </Typography>
        </View>
        <View style={styles.body}>
          {Array(5)
            .fill(0)
            .map((_, index) => {
              return (
                <TouchableOpacity
                  onPress={() => setRating(index + 1)}
                  key={`star-${index + 1}`}
                >
                  {rating >= index + 1 ? (
                    <StarSelected width={iconSize} height={iconSize} />
                  ) : (
                    <StarUnselected width={iconSize} height={iconSize} />
                  )}
                </TouchableOpacity>
              );
            })}
        </View>

        <View style={styles.footer}>
          <Input
            InputLeftElement={
              <View style={styles.inputLeft}>
                <EditIcon width={iconSize} height={iconSize} />
              </View>
            }
            // multiline
            placeholder="Leave feedback"
            containerStyle={styles.inputContainer}
          />
          <View style={{ flexDirection: 'row' }}>
            <Button variant="contained" color="primary" title="Submit" />
          </View>
        </View>
      </View>
    </View>
  );
};
export default Feedback;
