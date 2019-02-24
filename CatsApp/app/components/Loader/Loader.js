import React from 'react';
import { Text, View, Image} from 'react-native';
import styles from './LoaderStyles';

 const Loader = ({ isError, errorText }) => {
    
    return (
      <View style={styles.headerMain}>
            {isError 
            ?<React.Fragment>
              <Image source={require("./../../assets/images/cat-loader.gif")} />
              <Text>{errorText}</Text>
            </React.Fragment>
            :
            <Image source={require("./../../assets/images/cat-error.gif")} />
            }
      </View>
    );
  };
  
  export default Loader;