import React from 'react';
import { Icon } from '../core';

class Reaction extends React.Component {
  constructor(props) {
    super(props);

    this.state = { total: props.total || 0 };
  }

  render() {
    const { name, isSelected } = this.props;
    const { total } = this.state;
    let classNames = '';
    console.log('Reaction isSelected', isSelected);
    if (isSelected === true) {
      classNames = `selected`;
    }
    return (
      <li className={classNames} onClick={() => this.props.onClick(name)}>
        <Icon name={name} />
        <span>{total}</span>
      </li>
    );
  }
}

export default Reaction;
