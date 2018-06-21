import React, {Component} from 'react';
import PropTypes from 'prop-types';

import preview from '../preview.png';

class Thumb extends Component {
  render() {
    return (
      <a onClick={this.props.toggle}>
        <img src={preview} />
      </a>
    );
  }
}

Thumb.propTypes = {};

export default Thumb;
