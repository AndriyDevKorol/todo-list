import React, { Component } from 'react'

class AddingForm extends Component {
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
       this.props.addItem(this.state);   
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='title'>Title: </label>                  
                    <input type='text' id='title' onChange={this.handleChange} />                    
                    <label htmlFor='completed'>Completed: </label>
                    <input type='text' id='completed' onChange={this.handleChange} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddingForm
