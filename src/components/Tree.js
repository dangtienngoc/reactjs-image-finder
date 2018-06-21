import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TreeItem from './TreeItem';

class Tree extends Component {

  constructor(props) {
    super(props);
    this.state = {
      folder: '',
      addFolder: false
    };
    this.removePath = this.removePath.bind(this);
    this.addFolder = this.addFolder.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  removePath(path, parent) {

    this.setState({
      directories: this.state.directories.filter(directory => directory.path !== path)
    });

    this.props.deleteImageOrPath(path);
    this.props.fetchImages(parent);
  }

  addFolder() {
    this.props.addFolder(path);
    this.setState({
      addFolder: false,
      folder: ''
    });
  }

  onChange(e) {
    this.setState({
      folder: e.target.value
    });
  }

  onBlur(e) {
    this.addFolder();
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.addFolder();
    }
  }

  renderTreeItem(item, onClick) {
    return (<TreeItem key={item.name} removePath={this.removePath} onClick={onClick} expand={false} value={item}/>);
  }

  render() {
    const {className, onClick, directories} = this.props;
    return (
      <ul className={className}>
        {directories && directories.map(item => this.renderTreeItem(item, onClick))}
        <li>
          {this.state.addFolder ?
            (<input autoFocus={true} onKeyPress={this.handleKeyPress.bind(this)} onBlur={this.onBlur} type="text"
                    onChange={this.onChange} value={this.state.folder}/>) :
            (<span onClick={() => this.setState({addFolder: true})}>+</span>)}
        </li>
      </ul>
    );
  }
}

Tree.propTypes = {
  directories: PropTypes.array,
  className: PropTypes.string,
  onClick: PropTypes.func
};

Tree.defaultProps = {
  fetchImages: dir => console.log(dir),
  deleteImageOrPath: (path) => console.log(path),
  addFolder: path => console.log(path),
  onClick: (path) => console.log(path)
};

export default Tree;
