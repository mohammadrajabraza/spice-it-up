import React from 'react';

import type { NavigationProp } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

import assets from 'assets';
import type { CoreNavigatorParamList } from 'navigation/types';

import EmptyListFallback from 'components/EmptyListFallback';

const NoOrder = () => {
  const navigation = useNavigation<NavigationProp<CoreNavigatorParamList>>();

  return (
    <EmptyListFallback
      image={assets.images.noOrder}
      title="Oops, No Order Yet"
      description="You haven’t ordered anything to display"
      navigation={navigation}
    />
  );
};

export default NoOrder;
