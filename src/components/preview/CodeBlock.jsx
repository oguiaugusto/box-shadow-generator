import React, { Component } from 'react';
import PropTypes from 'prop-types'

class CodeBlock extends Component {
  static propTypes = {
    boxShadowCode: PropTypes.string.isRequired,
  }
  
  render() {
    const { props: { boxShadowCode } } = this;
    return (
      <code className="code-block">
        <span className="code-row">
          <span className="code-key">{`box-shadow: `}</span>
          <span className="code-value">{boxShadowCode}</span>
        </span>
        <span className="code-row">
          <span className="code-key">{`-webkit-box-shadow: `}</span>
          <span className="code-value">{boxShadowCode}</span>
        </span>
        <span className="code-row">
          <span className="code-key">{`-moz-box-shadow: `}</span>
          <span className="code-value">{boxShadowCode}</span>
        </span>
      </code>
    );
  }
}

export default CodeBlock;
