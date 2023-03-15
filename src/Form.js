import React, { Component } from "react";

class Form extends Component {

    //constructors are initialized when Form is created (instantiated)
    // we set the initial state of our form and save it to state.
    constructor(props){
        super(props); //inheriting props from Component

        // set the initial state of the Form
        this.initialState = {
            name: '',
            job:''
        };

        //set our initial state to state.
        this.state = this.initialState;
    }

    handleChange = event => {
        //get name, value out of target (element that changed)
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    onFormSubmit = (event) => { //(e) stands for event
       //standard code for event listeners
        event.preventDefault();
       
        //set the current state of our form to
        this.props.addCharacter(this.state);

        //clear inputs by setting forms to initial state
        this.setState(this.initialState);


    } 
    
    render() {
        //hook in data from state
        const { name, job } = this.state;
        return (
            <form onSubmit={this.onFormSubmit}>
            <label htmlFor="name">Name:</label><br/>
            <input 
               type="text" 
               id="name" 
               name="name"
               value={name}
               onChange={this.handleChange}
               /><br/>
            <label htmlFor="job">Job:</label><br/>
            <input 
               type="text" 
               id="job" 
               name="job"
               value={job}
               onChange={this.handleChange}/>
            <button type="submit">
                Submit
            </button>   
        </form>
        );
    }
}

export default Form