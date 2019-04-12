import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash, faUserEdit } from '@fortawesome/free-solid-svg-icons';

import React, { Component } from "react";
import { connect } from "react-redux";

import { postSmurf, fetchSmurfs, deleteSmurf, updateSmurf, showForm } from "../actions";
import AddSmurf from "./AddSmurf";
import UpdateSmurf from "./UpdateSmurf"
import Smurf from "./Smurf";

import "./App.css";

library.add(faTrash, faUserEdit);

class App extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.props.fetchSmurfs();
  }

  postSmurf = smurf => {
    this.props.postSmurf(smurf);
  };

  deleteSmurf = id => {
    this.props.deleteSmurf(id);
  };

  showForm = id => {
    this.props.showForm(id)
  };

  render() {
    return (
      <div className="App">
        {/* render add form or update form depending on flag */}
        {this.props.addFormVisible ? (
          <AddSmurf smurfs={this.props.smurfs} postSmurf={this.postSmurf} />
        ) : (
          <UpdateSmurf smurfs={this.props.smurfs} />
        )}

        <div className="smurf-container">
          {this.props.smurfs.map(smurf => (
            <Smurf
              key={smurf.id}
              smurf={smurf}
              deleteSmurf={this.deleteSmurf}
              showForm={this.showForm}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mstp = state => {
  return {
    smurfs: state.smurfs,
    addFormVisible: state.addFormVisible,
    id: state.id
  };
};

export default connect(
  mstp,
  { postSmurf, fetchSmurfs, deleteSmurf, updateSmurf, showForm }
)(App);
