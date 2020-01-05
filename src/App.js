import React, { Component } from 'react';
import Note from './components/Note';
import AddForm from './components/AddForm';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      notes: [
        {id: 1, content: "Some data"}
      ]
    }
  }

  deleteNote = (id) => {    
    const aList = this.state.notes.filter(aNote => {
      return aNote.id !== id
    });
    this.setState(
      alert(
          "Are you sure want to delete the note?"
          )
      );
    this.setState({
      notes: aList
    })
  }

  addNote = (item) => {
    if(item.content === '') {return}
    item.id = Math.round( Math.random()+1);
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

  clearAll = (e) => {
    this.setState(
      alert(
          "Are you sure want to clear the list?"
          )
      );  
    this.setState({
      notes: []      
    })     

  }

  render(){
    console.log(this.state.notes);
    return (
      <div className="App">
        <h1 className="header center">React Todo Aplication</h1>
        <Note list={this.state.notes} deleteNote={this.deleteNote} editNote={this.editNote}/>
        <AddForm addNote={this.addNote}/>
        <button className="clearAllBtn" onClick={this.clearAll}>Clear List</button>
      </div>
    );
  }
}

export default App;
