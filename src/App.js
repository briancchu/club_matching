import React from 'react'
import './App.css';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ firstName: event.target.firstName });
    this.setState({ lastName: event.target.lastName });
    this.setState({ email: event.target.email });
  }

  handleSubmit(event) {
    alert('Form submitted');
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          First Name:
          <input type="text" value={this.state.firstName} onChange={this.handleChange} />
        </label>
        <label>
          Last Name:
          <input type="text" value={this.state.lastName} onChange={this.handleChange} />
        </label>
        <label>
          Email:
          <input type="text" value={this.state.email} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

function App() {
  return (
    <div className="App">
      <NameForm />
    </div>
  );
}

export default App;
