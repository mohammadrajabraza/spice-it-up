import { View, ScrollView } from 'react-native';
import React from 'react';
import styles from './styles';
import TopBackground, { TopBackgroundProps } from 'components/TopBackground';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Dimensions } from 'styles';

type Props = {
  children: React.ReactNode;
  scrollView?: boolean;
} & TopBackgroundProps; 

const MainLayout = (props: Props): React.JSX.Element => {
  const {
    children,
    scrollView = false,
    ...rest
  } = props;

  const insets = useSafeAreaInsets();
  const paddingTop =
    insets.top + (props.showBackIcon ? Dimensions.height.size8 : 0);
  return (
    <View style={styles.container}>
      <TopBackground
        {...rest}
      />
      {props.scrollView && (
        <ScrollView
          style={[styles.wrapper]}
          contentContainerStyle={[styles.content, { paddingTop }]}
        >
          {props.children}
        </ScrollView>
      )}
      {!props?.scrollView && (
        <View style={[styles.wrapper, styles.content, { paddingTop }]}>
          {props.children}
        </View>
      )}
    </View>
  );
};

export default MainLayout;
