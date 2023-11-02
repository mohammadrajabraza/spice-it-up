import { View, SafeAreaView, FlatList } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MenuNavigatorParamList } from 'navigation/types';
import { SCREENS } from 'constants/screen-names';
import TopBackground from 'components/TopBackground';
import styles from './styles';
import Typography from 'components/Typography';
import Search from 'components/Search';
import data from 'data';
import MenuItem from 'components/MenuItem';

export type MenuListProps = NativeStackScreenProps<
  MenuNavigatorParamList,
  typeof SCREENS.MENU_LIST
>;

export type MenuListScreen = React.FC<MenuListProps>;

const MenuList: MenuListScreen = ({ route, navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <TopBackground showBackIcon type="core" />
      <View style={styles.wrapper}>
        <Typography variant="heading2" style={styles.title}>
          {route.params.category + ' Menu'}
        </Typography>
        <Search />

        <FlatList
          data={data.popularMenu}
          renderItem={({ item }) => (
            <MenuItem
              {...item}
              onPress={() =>
                navigation.navigate(SCREENS.MENU_ITEM, { id: item.id })
              }
              style={{
                container: styles.menuItemContainer,
                price: styles.menuItemPrice,
              }}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};
export default MenuList;
