import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { Grid, Section, Block } from 'react-native-responsive-layout';
import FilterButton from './FilterButton/FilterButton';

import FilterStyles from './FilterStyles'

const Filter = ({ options, onButtonPress }) => {
    return (
        <Grid style={FilterStyles.main}>
            <Section>
                {options.map( value => {
                    return (
                        <FilterButton value={value} onPress={onButtonPress} key={value}/>
                    )
                })
                }
            </Section>
        </Grid>
    );
  };
  export default Filter;