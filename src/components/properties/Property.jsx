import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Property extends Component {
  static propTypes = {
    handleChangeInput: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    min: PropTypes.string,
    max: PropTypes.string,
    step: PropTypes.string,
  }

  static defaultProps = {
    min: '-200',
    max: '200',
    step: '1',
  }

  render() {
    const { props: { handleChangeInput, name, id, value, min, max, step } } = this;

    return (
      <div className="property">
        <p className="property-name">{name}</p>
        <div className="property-input">
          <input
            type="number"
            name={ id }
            max={ max }
            min={ min }
            value={ value }
            onChange={ handleChangeInput }
          />
          <span>px</span>
        </div>
        <input
          type="range"
          name={ id }
          max={ max }
          min={ min }
          step={ step }
          value={ value }
          onChange={ handleChangeInput }
        />
      </div>
    );
  }
}

export default Property;
