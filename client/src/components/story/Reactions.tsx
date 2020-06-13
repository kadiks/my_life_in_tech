import React from 'react';
import { Icon } from '../core';
import Reaction from './Reaction';

import { incrementReaction } from '../../utils/Api';

export default class Reactions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: '',
      isClicked: false,
      reactions: {},
    };

    this.onClick = this.onClick.bind(this);
  }

  async onClick(name) {
    console.log('onClick name', name);
    if (this.state.isClicked === true) {
      return;
    }
    const reactions = [...this.state.reactions];
    reactions.forEach((r) => {
      if (r.name === name) {
        r.total++;
      }
    });
    const { storyId } = this.props;
    this.setState({
      isClicked: true,
      selected: name,
      reactions,
    });
    await incrementReaction({
      storyId,
      name,
    });
    // setTimeout(() => {
    //   this.setState({
    //     isClicked: false,
    //   });
    // }, 500);
  }
  render() {
    const { selected, isClicked } = this.state;
    let classNames = '';
    if (isClicked === true) {
      classNames = 'selected';
    }
    return (
      <ul className={classNames}>
        <Reaction
          isSelected={selected === 'thumbs-up'}
          name="thumbs-up"
          onClick={this.onClick}
        />
        <li>
          <Icon name="heart" />
          <span>3</span>
        </li>
        <li>
          <Icon name="grin-hearts" />
          <span>37</span>
        </li>
        <li>
          <Icon name="flushed" />
          <span>1</span>
        </li>
        <li>
          <Icon name="sad-tear" />
          <span>7</span>
        </li>
        <li>
          <Icon name="angry" />
          <span>42</span>
        </li>
      </ul>
    );
  }
}
