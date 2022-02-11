import React, { useContext, useState } from 'react';
import BoxShadowContext from '../context/BoxShadowContext';
import { Box } from '../styledComponents';

export default function PreviewBox() {
  const { boxShadowCode } = useContext(BoxShadowContext);
  const [boxColor, setBoxColor] = useState('#f3bf55');

  return (
    <Box bg={ boxColor } boxShadowCode={ boxShadowCode }>
      <input
        type="color"
        name="boxColor"
        value={ boxColor }
        onChange={ ({ target: { value } }) => setBoxColor(value) }
      />
    </Box>
  );
}
