import React, { Component } from 'react';

class Note extends Component { 
    render() {     
        return (  
           <div className="note" >
               <button className="deleteBtn" onClick={this.props.deleteMethod}>X</button>
               {this.props.text}
           </div>
        )   
    }
};


export default Note;