import { connect } from 'react-redux';
import {startRecording, stopRecording, addNotes} from '../../actions/tracks_action';
import Recorder from './recorder';
import React from 'react';

const mapStateToProps = (state) => ({
  tracks: state.tracks,
  isRecording: state.isRecording,
});

const mapDispatchToProps = dispatch => ({
  startRecording: () => dispatch(startRecording()),
  stopRecording: () => dispatch(stopRecording())
  // addNotes: notes => dispatch(addNotes(notes))
});

export default connect(mapStateToProps, mapDispatchToProps)(Recorder);
