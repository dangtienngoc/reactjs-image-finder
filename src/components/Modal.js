import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Portal from './Portal';
import Tree from './Tree';

import close from '../x.png';

var data = {
  id: '1',
  name: 'My Tree',
  children: [
    { name: 'hello', id: '2', },
    { name: 'wat', id: '3', },
    {
      id: '4',
      name: 'child folder',
      children: [
        {
          id: '5',
          name: 'child folder',
          children: [
            { id: '6', name: 'hello' },
            { id: '7', name: 'wat' }
          ]
        },
        { id: '8', name: 'hello' },
        { id: '9', name: 'wat' },
        {
          id: '10',
          name: 'child folder',
          children: [
            { id: '11', name: 'hello' },
            { id: '12', name: 'wat' }
          ]
        }
      ]
    }
  ]
};

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
                  <span>Header</span>
                  <a href="#" onClick={this.handleClose}><img src={close}/></a>
                </div>
                <div className="reactjs-image-finder__action">
                  <ul>
                    <li><a href="#">Root</a></li>
                    <li><a href="#">Image</a></li>
                  </ul>
                  <button>Create folder</button>
                  <button>Delete</button>
                  <button>Upload</button>
                </div>
                <div className="reactjs-image-finder__body">
                  <div className="right">
                    <Tree directories={[data]} />
                  </div>
                  <div className="left"></div>
                </div>
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
