import React from 'react';

export default function Project(props) {
  return <img class="project-list-item" src={props.pic.img} alt={props.pic.category} />;
}