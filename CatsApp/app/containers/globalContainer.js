import React from 'react';

export class GlobalContainer extends React.Component {
    state = {
        currentScreen: "Loader",
        kittenData: null
    }

    changeView = (view) => {
        this.setState({ currentScreen: view });
    } 

    getKittenData = () => {
        
    }

    render() {
        const { currentScreen, kittenData } = this.state;

        const store = {
            users,
            requestItems,
            selectedColumnIndex,
            highlightedColumnIndex,
            statuses,
            errors,
            saving,
        };

        return this.props.children(store);
    }
}