import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { PropertyStyled, InputRange } from '../styledComponents';
import BoxShadowContext from '../context/BoxShadowContext';

export default function Property({ name, id, min, max, step }) {
  const { properties, handleChangeInput } = useContext(BoxShadowContext);

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
            value={ properties[id] }
            onChange={ handleChangeInput }
          />
          <input
            type="number"
            name={ id }
            max={ max }
            min={ min }
            value={ properties[id] }
            onChange={ handleChangeInput }
            className="input-value"
          />
          <span>px</span>
        </div>
      </div>
    </PropertyStyled>
  );
}

Property.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  min: PropTypes.string,
  max: PropTypes.string,
  step: PropTypes.string,
}

Property.defaultProps = {
  min: '-200',
  max: '200',
  step: '1',
}
