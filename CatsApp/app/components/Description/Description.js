import React from 'react';
import { View, Text, ScrollView} from 'react-native';

import DescriptionStyles from './DescriptionStyles'

const Description = ({ title, desc }) => {
    return (
        <View style={DescriptionStyles.container}>
            <View style={DescriptionStyles.imageWrappper}>
                <Text style={DescriptionStyles.title}>{title}</Text>
            </View>
            <View styles={DescriptionStyles.desc}>
                <ScrollView styles={DescriptionStyles.desc}>
                        <Text >{desc}</Text>
                </ScrollView>
            </View>
        </View>
    );
  };
  export default Description;