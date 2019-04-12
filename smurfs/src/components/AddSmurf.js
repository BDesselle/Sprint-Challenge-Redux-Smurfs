import React, { Component } from "react";

export default class AddSmurf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: {
        name: "",
        age: "",
        height: ""
      }
    };
  }

  changeHandler = event => {
    event.preventDefault();
    this.setState({
      smurf: { ...this.state.smurf, [event.target.name]: event.target.value }
    });
  };

  addSmurf = e => {
    e.preventDefault();
    this.props.postSmurf(this.state.smurf);
    this.setState({ smurf: { name: "", age: "", height: "" } });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addSmurf}>
          <fieldset>
            <h1 class="title" >Smurfbook</h1>
            <label htmlFor="name">Name</label>
            <input
              type="name"
              name="name"
              id="name"
              value={this.state.smurf.name}
              onChange={this.changeHandler}
            />
            <label htmlFor="age">Age</label>
            <input
              type="number"
              name="age"
              id="age"
              value={this.state.smurf.age}
              onChange={this.changeHandler}
            />
            <label htmlFor="email">Height</label>
            <input
              type="text"
              name="height"
              id="height"
              value={this.state.smurf.height}
              onChange={this.changeHandler}
            />
            <input class="inpBtn" type="submit" value="Add" />
          </fieldset>
        </form>
      </div>
    );
  }
}
