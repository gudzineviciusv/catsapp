import React from 'react';
import { Text, View} from 'react-native';
import styles from './HeaderStyles';

 const Header = ({ title, customHeaderColor, onReturn }) => {
    
    return (
      <View style={styles.headerMain}>
            <Text>{title}</Text>
      </View>
    );
  };
  
  export default Header;