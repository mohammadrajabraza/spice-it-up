import { Image, View } from 'react-native';
import React, { useRef, useState } from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import SwiperFlatList from 'react-native-swiper-flatlist';

import type { PublicNavigatorParamList } from 'navigation/types';
import { SCREENS } from 'constants/screen-names';
import assets from 'assets';

import Typography from 'components/Typography';
import Button from 'components/Button';
import Storage from 'utils/storage';
import { ONBOARDING_COMPLETE } from 'constants/storage';

import styles from './styles';
import { Colors, Dimensions } from 'styles';

const screens = [
  {
    id: 1,
    title: 'Find your Comfort\nFood here',
    subtitle: 'Here You Can find a dish for every\ntaste and color. Enjoy!',
    image: assets.images.onboarding1,
  },
  {
    id: 2,
    title: 'Spice it up is Where Your\nComfort Food Lives',
    subtitle: 'Enjoy a fast and smooth food\n delivery at your doorstep',
    image: assets.images.onboarding2,
  },
  {
    id: 3,
    title: 'Find Your Favorite\nFood',
    subtitle: 'Let’s choose, and enjoy the food',
    image: assets.images.onboarding3,
  },
];

export type OnboardingProps = NativeStackScreenProps<
  PublicNavigatorParamList,
  typeof SCREENS.ONBOARDING
>;

export type OnboardingScreen = React.FC<OnboardingProps>;

const Onboarding: OnboardingScreen = ({ navigation }) => {
  const [swipeIndex, setSwipeIndex] = useState(0);
  const swiperRef = useRef<SwiperFlatList>(null);

  const onNextPress = async () => {
    if (swipeIndex === screens.length - 1) {
      await Storage.set(ONBOARDING_COMPLETE, true);

      return navigation.navigate(SCREENS.LOGIN);
    }
    return swiperRef.current?.scrollToIndex({ index: swipeIndex + 1 });
  };

  return (
    <View style={styles.container}>
      <SwiperFlatList
        autoplay={false}
        autoplayLoop={false}
        index={swipeIndex}
        ref={swiperRef}
        onChangeIndex={({ index }) => setSwipeIndex(index)}
        style={{ flex: 0.5, height: Dimensions.height.size50 }}
        contentContainerStyle={{backgroundColor: Colors.white }}
        paginationStyle={styles.pagination}
        paginationStyleItem={styles.paginationItem}
        paginationStyleItemActive={styles.paginationItemActive}
        paginationStyleItemInactive={styles.paginationItemInactive}
        showPagination
        data={screens}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View
              style={{ width: Dimensions.width.size100, alignItems: 'center' }}
            >
              <Image
                source={item.image}
                style={styles.image}
                resizeMode="contain"
              />
            </View>
            <Typography variant="heading2" style={{ textAlign: 'center' }}>
              {item.title}
            </Typography>
            <Typography variant="body3" style={{ textAlign: 'center' }}>
              {item.subtitle}
            </Typography>
          </View>
        )}
      />
      {/* <View style={{ height: Dimensions.height.size10 }}> */}
        <Button
          variant="contained"
          color="primary"
          title="Next"
          style={{ button: styles.button }}
          onPress={onNextPress}
        />
      {/* </View> */}
    </View>
  );
};
export default Onboarding;
