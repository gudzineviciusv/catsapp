import React, {Component} from 'react';
import {View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import GlobalContainer from './app/containers/globalContainer';

export default class App extends Component {
  render() {
    return (
          <GlobalContainer />
    );
  }
}

EStyleSheet.build({
  $textColor: '#0275d8'
});