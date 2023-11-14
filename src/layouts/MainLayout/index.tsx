import { View, ScrollView } from 'react-native';
import React from 'react';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import type { TopBackgroundProps } from 'components/TopBackground';
import TopBackground from 'components/TopBackground';

import { Dimensions, Spacing } from 'styles';

import styles from './styles';

type Props = {
  children: React.ReactNode;
  scrollView?: boolean;
} & TopBackgroundProps;

const MainLayout = (props: Props): React.JSX.Element => {
  const { children, scrollView = false, ...rest } = props;

  const insets = useSafeAreaInsets();
  const paddingTop =
    insets.top + (props.showBackIcon ? Dimensions.height.size8 : 0);

  return (
    <View style={styles.container}>
      <TopBackground {...rest} />
      {scrollView ? (
        <ScrollView
          style={[[styles.wrapper]]}
          contentContainerStyle={[styles.content, { paddingTop }]}
        >
          {children}
        </ScrollView>
      ) : (
        <View
          style={[
            styles.wrapper,
            styles.content,
            {
              paddingTop,
              minHeight: Dimensions.screenHeight - Spacing.vertical.size28,
              marginBottom: Spacing.vertical.size28,
            },
          ]}
        >
          {children}
        </View>
      )}
    </View>
  );
};

export default MainLayout;
