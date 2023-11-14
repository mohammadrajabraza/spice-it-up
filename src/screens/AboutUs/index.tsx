import React from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { View } from 'react-native';

import type { ProfileNavigatorParamList } from 'navigation/types';
import type { SCREENS } from 'constants/screen-names';
import MainLayout from 'layouts/MainLayout';
import Typography from 'components/Typography';

import styles from './styles';

export type AboutUsProps = NativeStackScreenProps<
  ProfileNavigatorParamList,
  typeof SCREENS.ABOUT_US
>;

export type AboutUsScreen = React.FC<AboutUsProps>;

const aboutUs = [
  {
    id: 1,
    heading: 'Lorem ipsum dolor sit amet',
    paragraphs: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    ],
  },
  {
    id: 2,
    heading: 'Lorem ipsum dolor sit amet',
    paragraphs: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    ],
  },
];

const AboutUs: AboutUsScreen = () => (
  <MainLayout type="core" showBackIcon scrollView>
    <Typography variant="heading2" style={styles.title}>
      About Us
    </Typography>

    <View style={styles.content}>
      {aboutUs.map((item) => (
        <View key={item.id}>
          <Typography variant="body2" style={styles.heading}>
            {item.heading}
          </Typography>
          <View style={{ gap: 18 }}>
            {item.paragraphs.map((paragraph) => (
              <Typography
                key={`${item.id}-${Math.random()}`}
                variant="caption"
                style={styles.paragraph}
              >
                {paragraph}
              </Typography>
            ))}
          </View>
        </View>
      ))}
    </View>
    <Typography variant="caption" style={styles.version}>
      Version v1.2.1.0
    </Typography>
  </MainLayout>
);
export default AboutUs;
