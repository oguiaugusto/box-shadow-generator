import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PropertyStyled, InputRange } from '../styledComponents';

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
      <PropertyStyled className="property">
        <p className="property-name">{name}</p>
        <div className="property-row">
          <div className="property-input">
            <InputRange
              type="range"
              name={ id }
              max={ max }
              min={ min }
              step={ step }
              value={ value }
              onChange={ handleChangeInput }
            />
            <input
              type="number"
              name={ id }
              max={ max }
              min={ min }
              value={ value }
              onChange={ handleChangeInput }
              className="input-value"
            />
            <span>px</span>
          </div>
        </div>
      </PropertyStyled>
    );
  }
}

export default Property;
