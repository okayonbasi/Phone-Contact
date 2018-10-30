import React, { Component } from 'react';
import Contacts from './Contacts';
import '../App.css';
class App extends Component {

  constructor(props) {
    super(props);
    this.addContact = this.addContact.bind(this);
  }
  
  state={
    contacts:[{
        name:"Mehmet",
        phone:"05544304405"
    },
{
    name:"Okay",
    phone:"05554443322"
}]
};

  addContact(contact){
    const {contacts} = this.state;
    contacts.push(contact);
    this.setState({
      contacts
    });
  }
  render() {
    return (
      <div className="App">
        <Contacts 
        addContact={this.addContact}
        contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
