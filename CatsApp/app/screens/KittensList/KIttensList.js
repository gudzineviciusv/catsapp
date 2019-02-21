import React, {Component} from 'react';
import { Text, View} from 'react-native';
import Header from './../../components/Header/Header';
import styles from './../../styles/styles';
import Filter from '../../components/Filter/Filter';
import KittenList from '../../components/KittenList/KittenList';

const KittensList = ({changeKittensCount, changeToKittenView, catList}) => {
       return (
        <View style={styles.container}>
            <Header title="Cats App" />
            <Filter options={[30, 50, 100]} onButtonPress={changeKittensCount} />
            <KittenList onPress={changeToKittenView} catList={catList} />
        </View>
       );
}

export default KittensList;