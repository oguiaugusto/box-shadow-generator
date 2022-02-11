import React, { useContext, useState } from 'react';
import copy from 'clipboard-copy';
import { CodeBlockStyled } from '../styledComponents';
import BoxShadowContext from '../context/BoxShadowContext';

const SECOND = 1000;

export default function CodeBlock() {
  const { boxShadowCode } = useContext(BoxShadowContext);
  const [copied, setCopied] = useState(false);

  const copyCode = (
    `box-shadow: ${boxShadowCode};
-webkit-box-shadow: ${boxShadowCode};
-moz-box-shadow: ${boxShadowCode};`
  );

  return (
    <CodeBlockStyled className="code-block">
      <button
        type="button"
        onClick={ () => {
          copy(copyCode);
          setCopied(true);
          setTimeout(() => setCopied(false), SECOND)
        } }
      >
        {copied ? 'Copied' : 'Copy'}
      </button>
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
