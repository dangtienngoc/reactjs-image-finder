import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Thumb extends Component {
  render() {
    return (
      <a onClick={this.props.toggle}>
        <img src="http://via.placeholder.com/150x150" />
      </a>
    );
  }
}

Thumb.propTypes = {};

export default Thumb;
