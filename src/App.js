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

  handleChange(event, state) {
    event.preventDefault();
    this.setState({ state: event.target.value });
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
          <input type="text" onChange={(event) => this.handleChange(event, this.state.firstName)} />
        </label>
        <label>
          Last Name:
          <input type="text" onChange={(event) => this.handleChange(event, this.state.lastName)} />
        </label>
        <label>
          Email:
          <input type="text" onChange={(event) => this.handleChange(event, this.state.email)} />
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
