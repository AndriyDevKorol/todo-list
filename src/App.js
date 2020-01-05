import React, { Component } from 'react';
import NoteList from './components/NoteList';
import AddForm from './components/AddForm';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      notes: [
        {id: 1, content: 'Some text 1'},
        {id: 2, content: 'Some text 2'},       
      ]
    }
  }

  deleteNote = (id) => {    
    const aList = this.state.notes.filter(aNote => {
      return aNote.id !== id
    });
    this.setState({
      notes: aList
    })
  }

  addNote = (item) => {
    if(item.content === '') {return}
    item.id = (Math.random() + 2);
    const newArray = [...this.state.notes, item]
    this.setState({
      notes: newArray
    })
  }

  editNote = (value, id) => {  
    if(value ==='') {return} 
    const list = this.state.notes;
    list.map(note => {
      if(note.id===id){
        return note.content=value;
      }
    });
    this.setState({
      notes: list      
    })       
  }

  render(){
    console.log(this.state.notes);
    return (
      <div className="App">
        <h1 className="header center">React Todo Aplication</h1>
        <NoteList list={this.state.notes} deleteNote={this.deleteNote} editNote={this.editNote}/>
        <AddForm addNote={this.addNote}/>
      </div>
    );
  }
}

export default App;
