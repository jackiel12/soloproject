import React, { Component } from 'react';

//entry container should be a large input that onchange should update database on backend (fetch to backend?)
class Entry extends Component {
    constructor(props){
        super(props);
        this.state = {value: ''}
        this.handleChange= this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
      this.setState({value: event.target.value});
    } 
    handleSubmit(event) {
      alert('Post created!');
      // this.setState({value: ''});
      //should interact with backend here and on submit, should update the database (entry)
    }
    render() {

      var event = new Date()
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            {event.toString()}
            <textarea value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
          {/* should submit into database here */}
        </form>
      )
    }
}

export default Entry;