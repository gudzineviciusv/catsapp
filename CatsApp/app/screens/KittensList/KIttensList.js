import React, {Component} from 'react';
import { Text, View} from 'react-native';
import Header from './../../components/Header/Header';
import styles from './../../styles/styles'
import Filter from '../../components/Filter/Filter';
import KittenList from '../../components/KittenList/KittenList';

export default class KittensList extends Component {
    render() {
       return (
        <View style={styles.container}>
            <Header title="Cats App" />
            <Filter options={[30, 50, 100]} onButtonPress={this.props.changeKittensCount} />
            <KittenList onPress={this.props.changeToKittenView} catList={this.props.catList} />
        </View>
       );
      }
}
