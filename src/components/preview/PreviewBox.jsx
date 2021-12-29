import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Box } from '../styledComponents';

class PreviewBox extends Component {
  static propTypes = {
    boxShadowCode: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      boxColor: '#f3bf55',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { state: { boxColor }, props: { boxShadowCode } } = this;

    return (
      <Box bg={ boxColor } boxShadowCode={ boxShadowCode }>
        <input type="color" name="boxColor" value={ boxColor } onChange={ this.handleChange } />
      </Box>
    );
  }
}

export default PreviewBox;
