import React from 'react';
import { Text, View} from 'react-native';
import styles from './HeaderStyles';
import Header from './../../components/Header/Header';

export default class Calender extends Component {
    state = {
        currentMonth: new Date(),
        selectedDate: new Date()
      };

      render() {
        <View>
            <Header></Header>
        </View>
      }

    }