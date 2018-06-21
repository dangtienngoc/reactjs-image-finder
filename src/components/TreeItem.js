import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Tree from './Tree';

class TreeItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: this.props.expand
    };
    this.expandFolder = this.expandFolder.bind(this);
  }

  expandFolder(path, e) {
    e.preventDefault();
    this.setState({
      expand: !this.state.expand
    });
    this.props.onClick(path);
  }

  render() {
    const {value} = this.props;
    return (
      <li>
        <a onClick={(e) => this.expandFolder(value.path, e)} href="#"
           className={this.state.expand ? 'active' : ''}>{value.name}
          <i onClick={() => {
          }}
             className="folder-tree__remove pull-right fa fa-trash-o"/>
        </a>
        {this.state.expand && <Tree onClick={this.props.onClick}
                                    expand={this.state.expand}
                                    className="sub"
                                    directories={value.children}
                                    parent={value.path}/>}
      </li>
    )
  }
}

TreeItem.propTypes = {
  value: PropTypes.object,
  expand: PropTypes.bool,
  onClick: PropTypes.func
};

export default TreeItem;
