/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';

import Input from 'components/Input';

import { Colors, Dimensions } from 'styles';

import SearchIcon from 'assets/svgs/search.svg';
import FilterIcon from 'assets/svgs/filter.svg';

import type { SearchComponent } from './search.types';
import styles from './styles';

const Search: SearchComponent = () => (
  <Input
    placeholder="What do you want to order?"
    placeholderTextColor={Colors.darkGrey}
    containerStyle={styles.searchInputContainer}
    InputLeftElement={
      <SearchIcon
        width={Dimensions.width.size6}
        height={Dimensions.width.size6}
      />
    }
    InputRightElement={
      <FilterIcon
        width={Dimensions.width.size6}
        height={Dimensions.width.size6}
      />
    }
  />
);

export default Search;
