import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ColorProperty extends Component {
  static propTypes = {
    handleChangeInput: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
  }

  render() {
    const { props: { handleChangeInput, value } } = this;

    return (
      <div className="property">
        <p className="property-name">Color</p>
        <input type="color" name="color" value={ value } onChange={ handleChangeInput } />
      </div>
    );
  }
}

export default ColorProperty;
