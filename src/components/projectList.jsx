import React from 'react';
import Project from './project';

export default function Projects(props) {
  return (
    <div class="images">
      {props.pics.map((pic) => (
        <Project
          pic={pic}
          key={Math.random()
            .toString()
            .slice(2, 10)}
        />
      ))}
    </div>
  );
}