import Header from './../components/Header/Header'
import PropTypes from 'prop-types';

Header.propTypes = {
    headerStyle: PropTypes.shape({
                    color: PropTypes.string,
                    fontSize: PropTypes.number,
                    backgroundColor: PropTypes.string
                }),
    dateFormat: PropTypes.string,
    headerButtonsStyle: PropTypes.shape({
                    color: PropTypes.string,
                    size: PropTypes.number,
                    nameLeft: PropTypes.string,
                    nameRight: PropTypes.string
                }),
    yearSelectionEndMount: PropTypes.number,
    disabledDays: PropTypes.number | PropTypes.object,
    todayDayColor: PropTypes.string,
    disabledDayColor: PropTypes.string,
    prevOrNextMonthColor: PropTypes.string,
    selectedDayColor: PropTypes.string
  };