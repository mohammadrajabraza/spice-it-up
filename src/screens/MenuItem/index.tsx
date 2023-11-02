import {
  View,
  SafeAreaView,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, { useRef, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MenuNavigatorParamList } from 'navigation/types';
import { SCREENS } from 'constants/screen-names';
import data from 'data';
import GoBack from 'components/GoBack';
import styles from './styles';
import Button from 'components/Button';
import Typography from 'components/Typography';

import assets from 'assets';
import Radio from 'components/Radio';
import CartQuantity from 'components/CartQuantity';

export type MenuItemProps = NativeStackScreenProps<
  MenuNavigatorParamList,
  typeof SCREENS.MENU_ITEM
>;

export type MenuItemScreen = React.FC<MenuItemProps>;

const getAddons = () => data.addons;

const getMenuItemData = (id: number) =>
  data.popularMenu.find(
    (item) => item.id === id,
  ) as (typeof data.popularMenu)[0];

const MenuItem: MenuItemScreen = ({ route }) => {
  const menuItem = getMenuItemData(route.params.id);
  const addons = getAddons();
  const scrollViewRef = useRef<ScrollView>(null);
  const [quantity, setQuantity] = useState(1);
  const onDecrement = () => {
    setQuantity((count) => count - 1);
  };
  const onIncrement = () => {
    setQuantity((count) => count + 1);
  };

  const [selectedAddonOption, setSelectedAddonOption] = useState(() => {
    return Object.fromEntries(
      addons.map(
        (addon) => [addon.id, addon.options[0].id] as [number, number],
      ),
    );
  });

  const onSelectAddonOption = (addonId: number, optionId: number) => {
    setSelectedAddonOption((prev) => ({
      ...prev,
      [addonId]: optionId,
    }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={menuItem.image}
        resizeMode="cover"
        style={styles.imageBackground}
      >
        <GoBack />
      </ImageBackground>

      <ScrollView
        style={styles.scrollView}
        ref={scrollViewRef}
        contentContainerStyle={styles.content}
      >
        <View style={styles.line} />
        <View style={styles.header}>
          <View style={styles.popular}>
            <Typography variant="caption" style={styles.popularText}>
              Popular
            </Typography>
          </View>
          <View style={styles.rating}>
            <Image source={assets.images.star} style={styles.star} />
            <Typography variant="body3" style={styles.ratingText}>
              4.8 Rating
            </Typography>
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.titleAndPriceRow}>
            <Typography variant="heading1" style={styles.name}>
              {menuItem.name}
            </Typography>
            <Typography variant="heading2" style={styles.price}>
              {'$' + parseInt(menuItem.price.replace('$', ''), 10)}
            </Typography>
          </View>
          <Typography variant="body3">
            Nulla occaecat velit laborum exercitation ullamco. Elit labore eu
            aute elit nostrud culpa velit excepteur deserunt sunt. Velit non est
            cillum consequat cupidatat ex Lorem laboris labore aliqua ad duis eu
            laborum.
          </Typography>
          <Typography variant="body3">
            Nulla occaecat velit laborum exercitation ullamco. Elit labore eu
            aute elit nostrud culpa velit excepteur deserunt sunt.
          </Typography>
          <View style={styles.addons}>
            {addons.map((addon) => (
              <View key={addon.id} style={styles.addonItem}>
                <View style={styles.addonHeader}>
                  <Typography variant="heading3">{addon.title}</Typography>
                  {addon.isRequired ? (
                    <Typography variant="body3" style={styles.addonRequired}>
                      Required
                    </Typography>
                  ) : null}
                </View>
                <View style={styles.addonOptions}>
                  {addon.options.map((option) => {
                    return (
                      <TouchableOpacity
                        onPress={() => onSelectAddonOption(addon.id, option.id)}
                        key={`${addon.id}-${option.id}`}
                        style={styles.addonOptionItem}
                      >
                        <Radio
                          selected={option.id === selectedAddonOption[addon.id]}
                          onPress={() =>
                            onSelectAddonOption(addon.id, option.id)
                          }
                        />
                        <Typography variant="body2">{option.name}</Typography>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <CartQuantity
          count={quantity}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
        <Button
          variant="contained"
          title="Add to cart"
          color="primary"
          style={{ button: styles.footerButton }}
        />
      </View>
    </SafeAreaView>
  );
};
export default MenuItem;
