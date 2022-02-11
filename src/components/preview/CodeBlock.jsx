import React, { useContext } from 'react';
import { CodeBlockStyled } from '../styledComponents';
import BoxShadowContext from '../context/BoxShadowContext';

export default function CodeBlock() {
  const { boxShadowCode } = useContext(BoxShadowContext);

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
