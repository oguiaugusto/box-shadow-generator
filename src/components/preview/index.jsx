import React, { useContext } from 'react';
import PreviewBox from './PreviewBox';
import CodeBlock from './CodeBlock';
import BoxShadowContext from '../context/BoxShadowContext';

export default function Preview() {
  const { boxShadowCode } = useContext(BoxShadowContext);

    return (
      <div className="preview">
        <h2>Preview</h2>
        <PreviewBox />
        <CodeBlock />
      </div>
    );
}
