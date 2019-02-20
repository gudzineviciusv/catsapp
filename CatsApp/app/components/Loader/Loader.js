import React from 'react';
import { Text, View, Image} from 'react-native';
import styles from './LoaderStyles';

 const Loader = ({ isError, errorText }) => {
    
    return (
      <View style={styles.headerMain}>
            {isError 
            ?
            <Image source={require("./../../assets/images/cat-loader.gif")} />
            :
            <Image source={require("./../../assets/images/cat-error.gif")} />
            }
            <Text>{errorText}</Text>
      </View>
    );
  };
  
  export default Loader;