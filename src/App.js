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

  handleChange(event, str) {
    event.preventDefault();
    if (str === "first") {
      this.setState({ firstName: event.target.value });
    }
    else if (str === "last") {
      this.setState({ lastName: event.target.value });
    }
    else {
      this.setState({ email: event.target.value });
    }
  }

  handleSubmit(event) {
    alert('Form submitted');
    console.log(this.state.firstName)
    console.log(this.state.lastName)
    console.log(this.state.email)
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          First Name:
          <input type="text" onChange={(event) => this.handleChange(event, "first")} />
        </label>
        <label>
          Last Name:
          <input type="text" onChange={(event) => this.handleChange(event, "last")} />
        </label>
        <label>
          Email:
          <input type="text" onChange={(event) => this.handleChange(event, "email")} />
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
