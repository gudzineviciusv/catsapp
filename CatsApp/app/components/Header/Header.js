import React from 'react';
import { Text, View} from 'react-native';
import styles from './HeaderStyles';

const TopHeader = ({ title }) => {
    
    return (
      <View style={styles.headerMain}>
            <Text>{title}</Text>
      </View>
    );
  };

  export default TopHeader;
  