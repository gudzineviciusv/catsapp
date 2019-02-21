import Header from './../components/Header/Header';
import FilterButton from './../components/Filter/FilterButton/FilterButton'
import PropTypes from 'prop-types';
import Filter from '../components/Filter/Filter';

Header.propTypes = {
    title: PropTypes.string, 
    onReturn: PropTypes.func        
  };

FilterButton.propTypes = {
  value: PropTypes.number,
  onPress: PropTypes.func
}

Filter.prototype = {
  options: PropTypes.arrayOf(PropTypes.number),
  onButtonPress: PropTypes.func
}