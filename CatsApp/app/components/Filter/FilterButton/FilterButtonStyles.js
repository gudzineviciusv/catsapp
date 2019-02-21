import React, {Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import COLORS from './../../../reducers/reducers';

const FilterButtonStyles = EStyleSheet.create({
    buttonMain: {
        marginTop: "5%",
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        height: 30,
        width: '80%',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: COLORS.CATSAPP_BORDER,
        backgroundColor: COLORS.CATSAPP_GREEN,
        alignItems: 'center',
        justifyContent: 'center',
    }
  });

    export default FilterButtonStyles;