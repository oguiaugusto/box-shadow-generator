import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Property from './Property';
import ColorProperty from './ColorProperty';

class Properties extends Component {
  static propTypes = {
    handleChangeInput: PropTypes.func.isRequired,
    propertiesObj: PropTypes.objectOf(PropTypes.string).isRequired,
  }

  render() {
    const {
      props: {
        handleChangeInput,
        propertiesObj: {
          offX,
          offY,
          blur,
          spread,
          color,
          opacity
        },
      }
    } = this;

    return (
      <div className="properties">
        <h2>Properties</h2>
        <Property
          handleChangeInput={ handleChangeInput }
          name="Horizontal Length"
          id="offX"
          value={ offX }
        />
        <Property
          handleChangeInput={ handleChangeInput }
          name="Vertical Length"
          id="offY"
          value={ offY }
        />
        <Property
          handleChangeInput={ handleChangeInput }
          name="Blur Radius"
          id="blur"
          min="0"
          max="100"
          value={ blur }
        />
        <Property
          handleChangeInput={ handleChangeInput }
          name="Spread Radius"
          id="spread"
          value={ spread }
        />
        <Property
          handleChangeInput={ handleChangeInput }
          name="Opacity"
          id="opacity"
          min="0.01"
          max="1"
          step="0.01"
          value={ opacity }
        />
        <ColorProperty
          handleChangeInput={ handleChangeInput }
          value={ color }
        />
      </div>
    );
  }
}

export default Properties;
