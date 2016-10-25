import React from 'react';

const NoteKey = ({note, pressed}) =>  {
  return Object.keys(note).map((key) => {
    const isPressed = pressed.includes(key) ? "pressed" : "not-pressed";
    return <li key={key} className={ isPressed }>{key}</li>;
  });
};

export default NoteKey;
