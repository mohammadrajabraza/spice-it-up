import type { FlatListProps } from 'react-native';
import { FlatList, Image, ImageBackground, View } from 'react-native';
import React from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { MenuNavigatorParamList } from 'navigation/types';
import { SCREENS } from 'constants/screen-names';
import Typography from 'components/Typography';

import assets from 'assets';
import { Colors } from 'styles';
import Button from 'components/Button';
import data from 'data';
import TodaysSpecialItem from 'components/TodaysSpecialItem';
import CategoryItem from 'components/CategoryItem';
import MenuItem from 'components/MenuItem';
import Search from 'components/Search';
import MainLayout from 'layouts/MainLayout';

import styles from './styles';

export type HomeProps = NativeStackScreenProps<
  MenuNavigatorParamList,
  typeof SCREENS.HOME
>;

export type HomeScreen = React.FC<HomeProps>;

type RenderItem<TData extends Array<unknown>> = FlatListProps<
  TData[number]
>['renderItem'];

const todaysSpecialRenderItem: RenderItem<typeof data.todaysSpecial> = ({
  item,
}) => <TodaysSpecialItem {...item} />;

const Home: HomeScreen = ({ navigation }) => (
  <MainLayout scrollView type="core">
    <View style={styles.header}>
      <Typography variant="heading2" style={styles.title}>
        Find Your Favorite Food
      </Typography>
      <View style={styles.profile}>
        <Image
          source={assets.images.smallLogo}
          resizeMode="contain"
          style={styles.logo}
        />
      </View>
    </View>

    <Search />

    <ImageBackground
      source={assets.images.banner}
      resizeMode="contain"
      style={styles.banner}
    >
      <View style={styles.bannerContent}>
        <Typography variant="heading3" style={styles.bannerTitle}>
          {'Special Deal For\nOctober'}
        </Typography>
        <Button
          variant="contained"
          color="white"
          title="Buy Now"
          style={{
            text: styles.bannerButtonText,
            button: styles.bannerButton,
          }}
        />
      </View>
    </ImageBackground>
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Typography variant="heading3">Today&apos;s Special</Typography>
        <Typography variant="caption" style={{ color: Colors.red }}>
          View More
        </Typography>
      </View>

      <FlatList
        data={data.todaysSpecial}
        renderItem={todaysSpecialRenderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        style={styles.sectionList}
      />
    </View>
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Typography variant="heading3">Categories</Typography>
        <Typography variant="caption" style={{ color: Colors.red }}>
          View More
        </Typography>
      </View>

      <FlatList
        data={data.categoryList}
        renderItem={({ item }) => (
          <CategoryItem
            onPress={() =>
              navigation.navigate(SCREENS.MENU_LIST, {
                category: item.name,
              })
            }
            {...item}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        style={styles.sectionList}
      />
    </View>
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Typography variant="heading3">Popular Menu</Typography>
        <Typography variant="caption" style={{ color: Colors.red }}>
          View More
        </Typography>
      </View>

      {data.popularMenu.map((item) => (
        <MenuItem {...item} key={item.id} />
      ))}
    </View>
  </MainLayout>
);
export default Home;
