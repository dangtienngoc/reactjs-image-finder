import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Portal from './Portal';

import close from '../x.png';
class Modal extends Component {

  constructor(props, context) {
    super(props, context);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose(e) {
    e.stopPropagation();
    this.props.onClose();
  }

  render() {
    const {isOpen} = this.props;

    if (isOpen) {
      return (
        <Portal>
          <div className="reactjs-image-finder--modal">
            <div className="reactjs-image-finder--wrapper">
              <div className="reactjs-image-finder--container">
                <div className="reactjs-image-finder__header">
                  Header <a href="#" onClick={this.handleClose}><img src={close} /></a>
                </div>
                <div className="reactjs-image-finder__body">Content</div>
                <div className="reactjs-image-finder__header">Footer</div>
              </div>
            </div>
          </div>
          <div className="reactjs-image-finder--modal-backdrop"/>
        </Portal>
      );
    }

    return null;
  }
}

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

export default Modal;
