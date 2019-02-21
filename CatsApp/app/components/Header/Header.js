import React from 'react';
import { Text, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import HeaderStyles from './HeaderStyles';
import { Grid, Section, Block } from 'react-native-responsive-layout';

const Header = ({ title, onReturn }) => {
    return (
      <Grid style={HeaderStyles.headerWhitReturn}>
          <Section style={HeaderStyles.wrapperSection}>
          {onReturn &&
            <Block size="1/3">
                <TouchableOpacity onPress={onReturn}>
                  <Text style={HeaderStyles.headerTitle}>Return</Text>
                </TouchableOpacity>
            </Block>
          }
            <Block size={onReturn ? "1/3" : "1/1"} style={HeaderStyles.wrapperSection}>
                <Text style={HeaderStyles.headerTitle}>{title}</Text>
            </Block>
          </Section>
      </Grid>
    );
  };
  export default Header;
  