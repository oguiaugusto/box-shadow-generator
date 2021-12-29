import React, { Component } from 'react';
import { Properties, Preview } from './components';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      offX: '5',
      offY: '5',
      blur: '5',
      spread: '0',
      color: '#000000',
      opacity: '0.4',
    };

    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  handleChangeInput({ target: { name, value, min, max } }) {
    if (parseFloat(value) < parseFloat(min)) value = min;
    if (parseFloat(value) > parseFloat(max)) value = max;
    this.setState({ [name]: value });
  }

  render() {
    const { state: { offX, offY, blur, spread, color, opacity } } = this;
    const propertiesObj = { offX, offY, blur, spread, color, opacity };

    return (
      <main>
        <Properties
          handleChangeInput={ this.handleChangeInput }
          propertiesObj= { propertiesObj }
        />
        <Preview />
      </main>
    );
  }
}

export default App;
