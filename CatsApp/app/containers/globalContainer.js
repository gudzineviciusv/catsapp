import React, {Component} from 'react';
import {View} from 'react-native';
import KittensList from './../screens/KittensList/KIttensList';
import Loader from './../components/Loader/Loader';

export default class GlobalContainer extends Component {
    state = {
        currentScreen: "KittenList",
        kittenData: null,
        kittenCount: 30
    }

    changeView = (view) => {
        this.setState({ currentScreen: view });
    } 

    getKittenData = () => {
        fetch("http://placekitten.com/200/300").then(

        )
    }

    getCurrentScreen = () => {
        switch (this.state.currentScreen) {
            case 'KittenList':
                return (
                    <KittensList/>
                    );
            case 'DetailKittenView':
                return (
                      <KittensList/>
                    );
            case 'Loader':
                return (
                      <Loader isError={false} errorText="AAA"/>
                    );
            default: console.warn("loading");
    }
}

    render() {
        return (<View style={{flex: 1}}>{this.getCurrentScreen()}</View>);
    }
}