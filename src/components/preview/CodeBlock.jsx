import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CodeBlockStyled } from '../styledComponents';

class CodeBlock extends Component {
  static propTypes = {
    boxShadowCode: PropTypes.string.isRequired,
  }
  
  render() {
    const { props: { boxShadowCode } } = this;
    return (
      <CodeBlockStyled className="code-block">
        <span className="code-row">
          <span className="code-key">{`box-shadow: `}</span>
          <span className="code-value">{boxShadowCode};</span>
        </span>
        <span className="code-row">
          <span className="code-key">{`-webkit-box-shadow: `}</span>
          <span className="code-value">{boxShadowCode};</span>
        </span>
        <span className="code-row">
          <span className="code-key">{`-moz-box-shadow: `}</span>
          <span className="code-value">{boxShadowCode};</span>
        </span>
      </CodeBlockStyled>
    );
  }
}

export default CodeBlock;
