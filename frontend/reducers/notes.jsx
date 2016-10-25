import { KEY_PRESSED, KEY_RELEASED } from '../actions/notes_actions';
import { NOTE_NAMES, TONES } from '../util/tones';

const defaultState = [];
const notesReducer = (prevState = defaultState, action) => {
  Object.freeze(prevState);

    switch (action.type) {
      case KEY_PRESSED:
        if (NOTE_NAMES.includes(action.key) && !prevState.includes(action.key)) {
          return [...prevState, action.key];
        }
        else {
          return prevState;
        }
      case KEY_RELEASED:
        const newNotes = [];
          const noteKey = prevState.indexOf(action.key);
          if (noteKey === -1) {
            return prevState;
          }

          return prevState.slice(0, noteKey).concat(prevState.slice(noteKey + 1));
      default:
        return prevState;
    }

};

export default notesReducer;
