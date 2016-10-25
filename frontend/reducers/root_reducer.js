import { combineReducers } from 'redux';
import notesReducer from './notes';
import tracksReducer from './tracks_reducer';
import isRecordingReducer from './is_recording_reducer';

const rootReducer = combineReducers({
  notes: notesReducer,
  isRecording: isRecordingReducer,
  tracks: tracksReducer
});

export default rootReducer;
