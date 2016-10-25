import { START_RECORDING, STOP_RECORDING, ADD_NOTES } from '../actions/tracks_action';
import merge from 'lodash/merge';

let currTrackId = 0;
const tracksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case START_RECORDING:
      currTrackId++;
      let track =   { id: currTrackId, name: `Track ${currTrackId}`, roll: [], timeStart: Date.now() };
      return updateTrack(state, track);
    case STOP_RECORDING:
      track = state[currTrackId];
      let endRoll = { roll: track.roll.concat({ notes: [], timeSlice: action.timeNow - track.timeStart }) };
      return updateRolls(state, track, endRoll);
    case ADD_NOTES:
      track = state[currTrackId];
      let newRoll = { roll: track.roll.concat({ notes: action.notes, timeSlice: action.timeNow - track.timeStart }) };
      return updateRolls(state, track, newRoll);
    default:
      return state;
  }
};

function updateTrack(state, track) {
  let newState = {};
  newState[currTrackId] = track;
  return merge({}, state, newState);
}

function updateRolls(state, track, newRoll) {
  let newTrack = merge(track, newRoll);
  return updateTrack(state, newTrack);
}

export default tracksReducer;
