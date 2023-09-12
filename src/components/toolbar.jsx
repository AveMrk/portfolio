import React from 'react';

export default function Filters(props) {
  const onChoose = props.onChoose;
  const categories = props.categories;

  return (
    <ul class="toolbar">
      {categories.map(el => (
        <li
          onClick={() => onChoose(el)}
          className={props.activeTag === el ? 'toolbar-item__active' : 'toolbar-item'}
        >
          {el}
        </li>
      ))}
    </ul>
  );
}
