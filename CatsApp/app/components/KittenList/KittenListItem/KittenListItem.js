import React from 'react';
import { View, Text, TouchableOpacity, Dimensions} from 'react-native';
import Image from 'react-native-scalable-image';
import KittenListItemStyles from './KittenListItemStyles';

const KittenListItem = ({ image, onPress, name, catData }) => {
    return (
        <View style={KittenListItemStyles.main}>
            <TouchableOpacity onPress={() => onPress(catData)} >
                <View style={KittenListItemStyles.imageWrapper}>
                    <Image width={Dimensions.get('window').Height - 200} source={{uri: image}}/>
                </View>
                <View style={KittenListItemStyles.catNameField}>
                    <Text>{name}</Text>
                </View>
                
            </TouchableOpacity>
        </View>
    );
  };
  export default KittenListItem;
  