import React, {Component} from 'react'

class AddForm extends Component {
    state = {
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        console.log(e);
        // if(item.content === '') {return}
        e.preventDefault();
        this.props.addNote(this.state);
        this.setState({content: ''});
        this.setState(
            alert(
                " Do you want to add the note to the list?"
                )
            );        
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit} >
                    <label className="button" onClick={this.handleSubmit}>+</label>
                    <input className="textInput" type="text" onChange={this.handleChange} value={this.state.content} placeholder="Type here ..."/>
                </form>
            </div>
        )
    }
}

export default AddForm;