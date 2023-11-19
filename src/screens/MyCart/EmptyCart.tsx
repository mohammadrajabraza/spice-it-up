import React from 'react';

import type { NavigationProp } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

import assets from 'assets';
import type { CoreNavigatorParamList } from 'navigation/types';

import EmptyListFallback from 'components/EmptyListFallback';

const EmptyCart = () => {
  const navigation = useNavigation<NavigationProp<CoreNavigatorParamList>>();

  return (
    <EmptyListFallback
      image={assets.images.emptyCart}
      title="Hungry?"
      description={'You haven’t added anything to your cart!'}
      navigation={navigation}
    />
  );
};

export default EmptyCart;
