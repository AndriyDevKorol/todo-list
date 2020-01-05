import React, { Component } from 'react';
import Note from './components/Note';
import './App.css';


import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      noteText: '',
      notes: [], 
    }
  }

  updateNote(noteText) {
    this.setState({ noteText: noteText.target.value })
  }

  handleKeyPress = (event) => {
    if(event.key === 'Enter') {
      let notesArr = this.state.notes;
      notesArr.push(this.state.noteText);
      this.setState({noteText: ''});
    }
  }

  addNote() {
    if(this.state.noteText === '') {return}
    
    let notesArr = this.state.notes;
    notesArr.push(this.state.noteText);
    this.setState({noteText: ''});
    this.textInput.focus();
  }

  deleteNote(index) {
    let notesArr = this.state.notes;
    notesArr.splice(index, 1);
    this.setState({ notes: notesArr });
    console.log('delet')
  }

  render() {   
    let notes = this.state.notes.map((val, key) => {
      return <Note key={key} text={val} deleteMethod={() => this.deleteNote(key)} />
    }) 
    return (     
      <div className="App">
        <div className="header">React Todo Aplication</div>
        {notes}
        <div className="button" onClick={this.addNote.bind(this)}>+</div>
        <input type="text"
        ref={((input) => {this.textInput = input})} 
        className="textInput"
        value={this.state.noteText}
        onChange={noteText => this.updateNote(noteText)}
        onKeyPress={this.handleKeyPress.bind(this)}
        /> 
      </div>
    );
  }  
}

export default App;
