import {
  FlatList,
  FlatListProps,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MenuNavigatorParamList } from 'navigation/types';
import { SCREENS } from 'constants/screen-names';
import Typography from 'components/Typography';
import styles from './styles';
import TopBackground from 'components/TopBackground';
import assets from 'assets';
import Input from 'components/Input';
import { Colors, Dimensions } from 'styles';
import Button from 'components/Button';
import data from 'data';
import TodaysSpecialItem from 'components/TodaysSpecialItem';
import CategoryItem from 'components/CategoryItem';
import MenuItem from 'components/MenuItem';
import Search from 'components/Search';

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
}) => {
  return <TodaysSpecialItem {...item} />;
};

const Home: HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <TopBackground type="core" />
      <ScrollView style={styles.wrapper} contentContainerStyle={styles.content}>
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
            <Typography variant="heading3">Today's Special</Typography>
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
            renderItem={({ item }) => {
              return (
                <CategoryItem
                  onPress={() =>
                    navigation.navigate(SCREENS.MENU_LIST, {
                      category: item.name,
                    })
                  }
                  {...item}
                />
              );
            }}
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
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
