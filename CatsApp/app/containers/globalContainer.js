import React, {Component} from 'react';
import {View} from 'react-native';
import KittensList from './../screens/KittensList/KIttensList';
import Loader from './../components/Loader/Loader';
import KITTENS from './../config/kittenNames';

export default class GlobalContainer extends Component {
    state = {
        currentScreen: "Loader",
        kittenData: null,
        kittenCount: 30
    }

    componentWillMount() {
        this.getKittenData();
    }

    changeView = (view) => {
        this.setState({ currentScreen: view });
    } 

    changeKittenCount = (count) => {
        this.setState({ kittenCount: count });
    }

    changeToKittenView = (catData) => {

    }

    getKittenData = () => {
        let catsArr = [];
        for(let i=this.state.kittenCount +10; i > 10; i--) { // just for solid image rendering
            catsArr.push({"image": `http://placekitten.com/200/3${i}`, "catData": KITTENS[Math.floor(Math.random()*KITTENS.length)]})
        }
        console.warn(catsArr);
        this.setState({kittenData: catsArr, currentScreen: "KittenList"});
    }

    getCurrentScreen = () => {
        switch (this.state.currentScreen) {
            case 'KittenList':
                return (
                    <KittensList 
                        changeKittensCount={this.changeKittenCount}
                        changeToKittenView={this.changeToKittenView}
                        catList={this.state.kittenData}
                        />
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