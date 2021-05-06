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
        <div className="field-container">
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
        </div>
        <div className="submit-container">
          <input type="submit" value="Submit" />
        </div>
        <div className="checkbox-container">
          <input type="checkbox" />
        </div>
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
