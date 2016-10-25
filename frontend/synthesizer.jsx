import React from 'react';
import ReactDOM from 'react-dom';
import Note from "./util/note.js";
import configureStore from './store/store';
import Root from './components/root';

window.Note = Note;

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore({ notes: []});
  ReactDOM.render(
    <Root store={store}/>,
    document.getElementById('root')
  );
  window.store = store;
});
