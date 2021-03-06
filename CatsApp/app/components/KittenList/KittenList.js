import React from 'react';
import { ScrollView } from 'react-native';
import KittenListItem from './KittenListItem/KittenListItem';


const KittenList = ({ catList, onPress }) => {
    return (
        <ScrollView>
            {
                catList.map(cat => {
                    return (
                        <KittenListItem image={cat.image} onPress={() => onPress(cat)} key={cat.catData.Name} name={cat.catData.Name} catData={cat}/>
                    )
                })
            }
        </ScrollView>
    );
  };
  export default KittenList;