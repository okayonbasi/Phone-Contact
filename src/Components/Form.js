import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Form extends Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    };
    
    static propTypes={
        addContact: PropTypes.func
    };

    state={
        name:"",
        phone:""
    };

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    onSubmit(e){
        e.preventDefault();
        this.props.addContact({...this.state}); 
        this.setState({
            name:"",
            phone:""
        });
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input value={this.state.name} onChange={this.onChange} name={"name"} id={"name"} placeholder={"enter a name"}/><br/>
                    <input value={this.state.phone} onChange={this.onChange} name={"phone"} id={"phone"} placeholder={"enter a phone"}/>
                    <button>Add</button>
                </form>
            </div>
        );
    }
}

export default Form;