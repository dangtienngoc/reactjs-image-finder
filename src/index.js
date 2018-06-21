import React, {Component} from 'react';

import Modal from './components/Modal';
import Thumb from './components/Thumb';

import './style.css';

export default class ExampleComponent extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      isOpen: false,
    };
    this.toggle = this.toggle.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  onClose() {
    this.setState({
      isOpen: false,
    });
  }

  render() {
    const {isOpen} = this.state;
    return (
      <div>
        <Thumb toggle={this.toggle}/>
        <Modal isOpen={isOpen} onClose={this.onClose} />
      </div>
    )
  }
}
