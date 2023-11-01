import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import styles from './styles';

import MenuIcon from 'assets/svgs/menu.svg';
import MenuActiveIcon from 'assets/svgs/menu-active.svg';
import CartIcon from 'assets/svgs/cart.svg';
import CartActiveIcon from 'assets/svgs/cart-active.svg';
import OrderIcon from 'assets/svgs/order.svg';
import OrderActiveIcon from 'assets/svgs/order-active.svg';
import ReservationIcon from 'assets/svgs/reservation.svg';
import ReservationActiveIcon from 'assets/svgs/reservation-active.svg';
import ProfileIcon from 'assets/svgs/profile.svg';
import ProfileActiveIcon from 'assets/svgs/profile-active.svg';
import { NAVIGATORS } from 'constants/screen-names';
import { SvgProps } from 'react-native-svg';
import { moderateScale } from 'utils/styles';
import { Colors } from 'styles';

const IconMap = {
  [NAVIGATORS.MENU]: [MenuIcon, MenuActiveIcon],
  [NAVIGATORS.CART]: [CartIcon, CartActiveIcon],
  [NAVIGATORS.ORDER]: [OrderIcon, OrderActiveIcon],
  [NAVIGATORS.RESERVATION]: [ReservationIcon, ReservationActiveIcon],
  [NAVIGATORS.PROFILE]: [ProfileIcon, ProfileActiveIcon],
} as const;

const TabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;
          const TabBarIcon =
            route.name in IconMap && IconMap[route.name as keyof typeof IconMap]
              ? IconMap[route.name as keyof typeof IconMap][Number(isFocused)]
              : (_props: SvgProps) => <></>;
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={[styles.tabItem, isFocused && styles.selectedTabItem]}
            >
              <TabBarIcon
                width={moderateScale(24)}
                height={moderateScale(24)}
                color={isFocused ? Colors.red : Colors.darkGrey}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default TabBar;
