import React, { useContext } from 'react';
import { ColorPropertyStyled } from '../styledComponents';
import BoxShadowContext from '../context/BoxShadowContext';

export default function ColorProperty() {
  const { properties, handleChangeInput } = useContext(BoxShadowContext);
  return (
    <ColorPropertyStyled className="property">
      <p className="property-name">Color:</p>
      <input
        type="color"
        name="color"
        value={ properties.color }
        onChange={ handleChangeInput }
      />
    </ColorPropertyStyled>
  );
}
