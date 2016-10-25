import React from 'react';
import { NOTE_NAMES, TONES } from '../../util/tones';
import Note from '../../util/note';
import $ from 'jquery';
import NoteKey from './note_key';


class Synth extends React.Component {
  constructor(props) {
    super(props);
    this.notes = {};
    NOTE_NAMES.forEach(note => (
      this.notes[note] = new Note(TONES[note])
    ));
  }

  componentDidMount() {
    $(document).on('keydown', e => this.onKeyDown(e));
    $(document).on('keyup', e => this.onKeyUp(e));
  }

  render() {
    this.playNotes();
    return (
      <div >
        Synth
        <ul>
          { NoteKey({note: this.notes, pressed: this.props.notes} )}
        </ul>
      </div>
    );
  }

  onKeyDown(e) {
    const pressedKey = e.key;
    this.props.keyPressed(pressedKey);
    if (this.props.isRecording) {
      this.props.addNotes(this.props.notes);
    }
  }

  onKeyUp(e) {
    const pressedKey = e.key;
    this.props.keyReleased(pressedKey);
    if (this.props.isRecording) {
      this.props.addNotes(this.props.notes);
    }
  }

  playNotes() {
    for (let key in this.notes) {
      if (this.props.notes.includes(key)) {
        this.notes[key].start();
      } else {
        this.notes[key].stop();
      }
    }
  }

}

export default Synth;
