import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { Block } from 'react-native-responsive-layout';

import FilterButtonStyles from './FilterButtonStyles'

const FilterButton = ({ value, onPress }) => {
    return (
        <Block size="1/3" style={FilterButtonStyles.buttonMain}>
                <TouchableOpacity onPress={() => onPress(value)} style={FilterButtonStyles.button}>
                        <Text>{value}</Text>
                </TouchableOpacity>
        </Block>
    );
  };
  export default FilterButton;
  