import React, { useState } from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { FlatList, TouchableOpacity, View } from 'react-native';

import type { ProfileNavigatorParamList } from 'navigation/types';
import type { SCREENS } from 'constants/screen-names';
import MainLayout from 'layouts/MainLayout';
import Typography from 'components/Typography';

import Button from 'components/Button';

import TickIcon from 'assets/svgs/tick.svg';
import { moderateScale } from 'utils/styles';

import styles from './styles';

const iconSize = moderateScale(15);

export type LanguageProps = NativeStackScreenProps<
  ProfileNavigatorParamList,
  typeof SCREENS.LANGUAGE
>;

export type LanguageScreen = React.FC<LanguageProps>;

const languages = [
  {
    id: 1,
    name: 'Mandarin Chinese',
    code: 'ch',
  },
  {
    id: 2,
    name: 'Spanish',
    code: 'sp',
  },
  {
    id: 3,
    name: 'English',
    code: 'en',
  },
  {
    id: 4,
    name: 'Hindi',
    code: 'hn',
  },
  {
    id: 5,
    name: 'Arabic',
    code: 'ar',
  },
  {
    id: 6,
    name: 'Bengali',
    code: 'bn',
  },
  {
    id: 7,
    name: 'Portuguese',
    code: 'pg',
  },
  {
    id: 8,
    name: 'Russian',
    code: 'ru',
  },
  {
    id: 9,
    name: 'French',
    code: 'fr',
  },
  {
    id: 10,
    name: 'German',
    code: 'ge',
  },
  {
    id: 11,
    name: 'Japanese',
    code: 'jp',
  },
  {
    id: 12,
    name: 'Korean',
    code: 'kr',
  },
];

const Language: LanguageScreen = () => {
  const [selectedLanguage, setSelectLanguage] = useState('en');
  return (
    <MainLayout type="core" showBackIcon>
      <Typography variant="heading2" style={styles.title}>
        Language
      </Typography>
      <FlatList
        data={languages}
        renderItem={({ item }) => {
          const isSelected = item.code === selectedLanguage;
          return (
            <TouchableOpacity
              style={styles.item}
              onPress={() => setSelectLanguage(item.code)}
            >
              <Typography
                variant="body3"
                style={[styles.name, isSelected && styles.selectedName]}
              >
                {item.name}
              </Typography>
              {isSelected && (
                <View style={styles.tick}>
                  <TickIcon width={iconSize} height={iconSize} />
                </View>
              )}
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.code}
      />
      <Button
        variant="contained"
        color="primary"
        title="Update"
        style={{ button: { marginTop: 'auto' } }}
      />
    </MainLayout>
  );
};
export default Language;
