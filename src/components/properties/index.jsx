import React from 'react';
import Property from './Property';
import ColorProperty from './ColorProperty';

export default function Properties() {
  return (
    <div className="properties">
      <h2>Properties</h2>
      <Property
        name="Horizontal Length"
        id="offX"
      />
      <Property
        name="Vertical Length"
        id="offY"
      />
      <Property
        name="Blur Radius"
        id="blur"
        min="0"
        max="100"
      />
      <Property
        name="Spread Radius"
        id="spread"
      />
      <Property
        name="Opacity"
        id="opacity"
        min="0.01"
        max="1"
        step="0.01"
      />
      <ColorProperty />
    </div>
  );
}
