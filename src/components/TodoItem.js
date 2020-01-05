import React, { Component } from 'react';

class TodoItem extends Component {
    
    getStyle = () => {
        return {
            backgroundColor: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }     
    }  
    
    render() {   
           
        return (
            <div style = {this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.markComplete} /> {' '}
                    {this.props.todo.title} {' '}
                    <button onClick={this.props.onDelete.bind(this.props.todo.id)}>Delete</button>
                </p>               
            </div>
        )
    }
}

export default TodoItem
