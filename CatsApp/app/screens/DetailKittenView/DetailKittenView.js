import React, {Component} from 'react';
import {View, Dimensions} from 'react-native';
import Header from './../../components/Header/Header';
import styles from './../../styles/styles';
import Image from 'react-native-scalable-image';
import Description from './../../components/Description/Description';

const DetailKittenView = ({catData , onReturn}) => {
       return (
        <View style={styles.container}>
            <Header title={catData.catData.Name} onReturn={onReturn} />
            <View>
                <Image source={{uri: catData.image}} height={Dimensions.get('window').height -300}/>
            </View>
            <Description title={catData.catData.Name} desc={catData.catData.Description}/>
        </View>
       );
}

export default DetailKittenView;