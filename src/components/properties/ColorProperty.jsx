import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ColorPropertyStyled } from '../styledComponents';

class ColorProperty extends Component {
  static propTypes = {
    handleChangeInput: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
  }

  render() {
    const { props: { handleChangeInput, value } } = this;

    return (
      <ColorPropertyStyled className="property">
        <p className="property-name">Color:</p>
        <input type="color" name="color" value={ value } onChange={ handleChangeInput } />
      </ColorPropertyStyled>
    );
  }
}

export default ColorProperty;
