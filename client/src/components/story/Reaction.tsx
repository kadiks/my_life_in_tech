import React from 'react';
import { css } from 'emotion';
import { Icon } from '../core';

export default function Reaction({ name, isSelected, total, onClick }) {
  let classNames = '';
  if (isSelected === true) {
    classNames = `selected`;
  }
  return (
    <li className={classNames} onClick={() => onClick(name)}>
      <Icon name={name} />
      <span>{total}</span>
    </li>
  );
}
