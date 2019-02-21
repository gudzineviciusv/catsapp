import React, {Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import COLORS from './../../../reducers/reducers';

const KittenListItemStyles = EStyleSheet.create({
    main: {
      width: "90%",
      marginTop: 25,
      marginLeft: "auto",
      marginRight: "auto",
      alignItems: "center",
      justifyContent: 'center',
      paddingLeft: 10,
      backgroundColor: COLORS.CATSAPP_GREEN,
      borderRadius: 4,
      borderWidth: 1,
      borderColor: COLORS.CATSAPP_BORDER,
    },
    imageWrapper: {
        marginTop: 10,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: COLORS.CATSAPP_BORDER,
    },
    catNameField: {
        height: 40,
        alignItems: "center",
        justifyContent: 'center',
    }
  });

    export default KittenListItemStyles;