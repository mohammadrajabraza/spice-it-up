import React, { useState } from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { FlatList, TouchableOpacity, View } from 'react-native';

import type { ProfileNavigatorParamList } from 'navigation/types';
import type { SCREENS } from 'constants/screen-names';
import MainLayout from 'layouts/MainLayout';
import Typography from 'components/Typography';

import ChevronDownIcon from 'assets/svgs/chevron-down.svg';
import { moderateScale } from 'utils/styles';

import styles from './styles';

export type FaqsProps = NativeStackScreenProps<
  ProfileNavigatorParamList,
  typeof SCREENS.FAQS
>;

export type FaqsScreen = React.FC<FaqsProps>;

const faqsData = [
  {
    id: 1,
    question: 'What is Lorem Ipsum?',
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    id: 2,
    question: 'What is Lorem Ipsum?',
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    id: 3,
    question: 'What is Lorem Ipsum?',
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    id: 4,
    question: 'What is Lorem Ipsum?',
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
];

const Faqs: FaqsScreen = () => {
  const [selectedFaq, setSelectedFaq] = useState<number | null>(null);

  const handleFaqSelection = (id: number) => {
    if (selectedFaq === id) {
      setSelectedFaq(null);
    } else {
      setSelectedFaq(id);
    }
  };

  return (
    <MainLayout type="core" showBackIcon>
      <Typography variant="heading2" style={styles.title}>
        FAQs
      </Typography>

      <FlatList
        data={faqsData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.faq}>
            <View style={styles.faqHeader}>
              <Typography variant="body3" style={styles.question}>
                {item.question}
              </Typography>
              <TouchableOpacity
                onPress={() => {
                  handleFaqSelection(item.id);
                }}
              >
                <ChevronDownIcon
                  width={moderateScale(25)}
                  height={moderateScale(25)}
                />
              </TouchableOpacity>
            </View>
            {selectedFaq === item.id && (
              <>
                <View style={styles.line} />
                <View style={styles.faqBody}>
                  <Typography variant="caption" style={styles.answer}>
                    {item.answer}
                  </Typography>
                </View>
              </>
            )}
          </View>
        )}
      />
    </MainLayout>
  );
};
export default Faqs;
