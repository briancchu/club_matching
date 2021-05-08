import React from 'react'
import './App.css';
import Tabletop from 'tabletop';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      data: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    Tabletop.init({
      key: '1I0phc1Gs_mFcq1MgqTe296aT-hQAfi4QLjH25JQLs1Q',
      callback: googleData => {
        console.log('google sheet data --->', googleData)
      },
      simpleSheet: true
    })
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
    const { data } = this.state
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
        <input type="checkbox" />
        {
          data.map(obj => {
            return (
              <div key={obj.person}>
                <p>{obj.firstName}</p>
                <p>{obj.lastName}</p>
                <p>{obj.email}</p>
              </div>
            )
          })
        }
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