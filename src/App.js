import React from 'react';
import { Properties, Preview } from './components';
import BoxShadowProvider from './components/context/BoxShadowProvider';

export default function App() {
  return (
    <BoxShadowProvider>
      <h1>Box Shadow Generator</h1>
      <main>
        <Properties />
        <Preview />
      </main>
    </BoxShadowProvider>
  );
}
