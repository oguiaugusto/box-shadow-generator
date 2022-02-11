import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import BoxShadowContext from './BoxShadowContext';

const getColor = (hex, opacity) => {
  const rgb = {
    r: parseInt(hex.slice(1, 3), 16),
    g: parseInt(hex.slice(3, 5), 16),
    b: parseInt(hex.slice(5, 7), 16),
    a: opacity,
  };

  const { r, g, b, a } = rgb;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

export default function BoxShadowProvider({ children }) {
  const [properties, setProperties] = useState({
    offX: '5',
    offY: '5',
    blur: '5',
    spread: '0',
    color: '#000000',
    opacity: '0.4',
  });
  const [boxShadowCode, setBoxShadowCode] = useState('');

  useEffect(() => {
    const { offX, offY, blur, spread, opacity, color } = properties;
    const colorCode = getColor(color, opacity);

    setBoxShadowCode(`${offX}px ${offY}px ${blur}px ${spread}px ${colorCode}`);
  }, [properties])

  const handleChangeInput = ({ target: { name, value, min, max } }) => {
    if (parseFloat(value) < parseFloat(min)) value = min;
    if (parseFloat(value) > parseFloat(max)) value = max;
    setProperties({ ...properties, [name]: value });
  }

  const contextValue = {
    properties,
    handleChangeInput,
    boxShadowCode,
  };

  return (
    <BoxShadowContext.Provider value={ contextValue }>
      {children}
    </BoxShadowContext.Provider>
  );
}

BoxShadowProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
