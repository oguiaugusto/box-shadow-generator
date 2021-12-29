import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PreviewBox from './PreviewBox';
import CodeBlock from './CodeBlock';

class Preview extends Component {
  static propTypes = {
    propertiesObj: PropTypes.objectOf(PropTypes.string).isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {};

    this.getColor = this.getColor.bind(this);
    this.generateBoxShadowCode = this.generateBoxShadowCode.bind(this);
  }

  getColor(hex, opacity) {
    const rgb = {
      r: parseInt(hex.slice(1, 3), 16),
      g: parseInt(hex.slice(3, 5), 16),
      b: parseInt(hex.slice(5, 7), 16),
      a: opacity,
    };

    const { r, g, b, a } = rgb;

    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }

  generateBoxShadowCode() {
    const {
      props: {
        propertiesObj: {
          offX,
          offY,
          blur,
          spread,
          opacity,
          color,
        },
      },
    } = this;

    return `${offX}px ${offY}px ${blur}px ${spread}px ${this.getColor(color, opacity)}`;
  }

  render() {
    return (
      <div className="preview">
        <h2>Preview</h2>
        <PreviewBox boxShadowCode={ this.generateBoxShadowCode() } />
        <CodeBlock boxShadowCode={ this.generateBoxShadowCode() } />
      </div>
    );
  }
}
 
export default Preview;
