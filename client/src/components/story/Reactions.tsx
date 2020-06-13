import React from 'react';
import { css } from 'emotion';

import { Icon } from '../core';
import Reaction from './Reaction';

import { incrementReaction, getStoryReactions } from '../../utils/Api';

export default class Reactions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: '',
      isClicked: false,
      reactions: {
        'thumbs-up': 0,
        heart: 0,
        'grin-hearts': 0,
        flushed: 0,
        'sad-tear': 0,
        angry: 0,
      },
    };

    this.onClick = this.onClick.bind(this);
  }

  async componentDidMount() {
    const loadedReactions = await getStoryReactions({
      storyId: this.props.storyId,
    });
    const reactions = Object.assign({}, this.state.reactions);
    Object.keys(loadedReactions).forEach((k) => {
      if (reactions.hasOwnProperty(k) === false) {
        delete loadedReactions[k];
      }
    });
    const merged = Object.assign(reactions, loadedReactions);
    this.setState({
      reactions: merged,
    });
  }

  async onClick(name) {
    const { storyId } = this.props;
    // console.log('onClick name', name);
    if (this.state.isClicked === true) {
      return;
    }
    const reactions = Object.assign({}, this.state.reactions);
    Object.keys(reactions).forEach((k) => {
      if (k === name) {
        reactions[k]++;
      }
    });
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
    const { selected, isClicked, reactions } = this.state;
    // console.log('reactions', reactions);
    let classNames = '';
    if (isClicked === true) {
      classNames = 'selected';
    }
    return (
      <ul className={classNames}>
        {Object.keys(reactions).map((key) => {
          return (
            <Reaction
              key={key}
              isSelected={selected === key}
              name={key}
              total={reactions[key]}
              onClick={this.onClick}
            />
          );
        })}
      </ul>
    );
  }
}
