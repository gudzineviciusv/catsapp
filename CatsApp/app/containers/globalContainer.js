import React, {Component} from 'react';
import {View} from 'react-native';
import KittensList from './../screens/KittensList/KIttensList';
import Loader from './../components/Loader/Loader';
import KITTENS from './../config/kittenNames';
import DetailKittenView from '../screens/DetailKittenView/DetailKittenView';

export default class GlobalContainer extends Component {
    state = {
        currentScreen: "Loader",
        kittenData: null,
        kittenForPrev: null,
        kittenCount: 30
    }

    componentDidMount() {
        this.getKittenData();
    }

    changeView = (view) => {
        this.setState({ currentScreen: view });
    } 

    changeKittenCount = (count) => {
        this.setState({ kittenCount: count, isLoading: true});
        this.getKittenData();
    }

    changeToKittenView = (catData) => {
        this.setState({ kittenForPrev: catData });
        this.changeView("DetailKittenView");
    }

    changeToKittenList = () => {
        this.setState({ kittenForPrev: null });
        this.changeView("KittenList");
    }

    getKittenData = () => {
        let catsArr = [];
        for(let i=this.state.kittenCount; i > 0; i--) {
            catsArr.push({"image": `http://placekitten.com/200/3${Math.floor(Math.random()*50)  + 10}`, "catData": KITTENS[Math.floor(Math.random()*KITTENS.length)]})
        }
        this.setState({kittenData: catsArr, isLoading: false, currentScreen: "KittenList"});
        catsArr=[];
    }

    getCurrentScreen = () => {
        const { kittenData, kittenForPrev, isLoading} = this.state;
        switch (this.state.currentScreen) {
            case 'KittenList':
                return (
                    <KittensList 
                        changeKittensCount={this.changeKittenCount}
                        changeToKittenView={this.changeToKittenView}
                        catList={kittenData}
                        />
                    );
            case 'DetailKittenView':
                return (
                    
                    <DetailKittenView 
                        catData={kittenForPrev}
                        onReturn={this.changeToKittenList}
                      />
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