import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer';

const pS = { notes: [], isRecording: false, tracks: {} };

const configureStore = (preloadedState = pS) => {
  return createStore(rootReducer, preloadedState);
};

// we can do this to allow for conditionals in our loading

export default configureStore;
