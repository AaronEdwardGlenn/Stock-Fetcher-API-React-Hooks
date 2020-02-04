import React from 'react';
import PropTypes from 'prop-types';
import styles from './RadioButton.css';

const RadioButton = ({ name, label, value, onChange }) => (

  <div className={styles.RadioButton}>
    <input type="radio" name={name} label={label} value={value} onChange={onChange} />
    <label htmlFor={value}>{label}</label>
  </div>
);

RadioButton.propTypes = {
  name: 
    PropTypes.string.isRequired,
  label: 
    PropTypes.string.isRequired,
  value: 
    PropTypes.string.isRequired,
  onChange: 
    PropTypes.func.isRequired,
};

export default RadioButton; 
