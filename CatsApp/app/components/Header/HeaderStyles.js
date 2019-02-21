import React, {Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import COLORS from './../../reducers/reducers';

const HeaderStyles = EStyleSheet.create({
    headerMain: {
      height: '10%',
      width: Dimensions.get('window').width,
      justifyContent: 'center',
      paddingLeft: 10,
      backgroundColor: COLORS.CATSAPP_GREEN
    },
    wrapperSection: {
      alignItems: 'center',
      justifyContent: 'center'
    },
    headerTitle: {
      fontSize: 20
    },
    headerWhitReturn: {
      height: '10%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: COLORS.CATSAPP_GREEN
    }
  });

    export default HeaderStyles;