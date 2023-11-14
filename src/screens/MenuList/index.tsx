import { FlatList } from 'react-native';
import React from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { MenuNavigatorParamList } from 'navigation/types';
import { SCREENS } from 'constants/screen-names';

import Typography from 'components/Typography';
import Search from 'components/Search';
import data from 'data';
import MenuItem from 'components/MenuItem';
import MainLayout from 'layouts/MainLayout';

import styles from './styles';

export type MenuListProps = NativeStackScreenProps<
  MenuNavigatorParamList,
  typeof SCREENS.MENU_LIST
>;

export type MenuListScreen = React.FC<MenuListProps>;

const MenuList: MenuListScreen = ({ route, navigation }) => (
  <MainLayout type="core" showBackIcon>
    <Typography variant="heading2" style={styles.title}>
      {`${route.params.category} Menu`}
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
  </MainLayout>
);
export default MenuList;
