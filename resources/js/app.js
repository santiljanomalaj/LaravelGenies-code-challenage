import React, { Component } from 'react';
import ProjectList from './ProjectList';
import projectsData from './projectsData';

class App extends Component {
  state = {
    projects: [],
  };

  componentDidMount() {
    // Here you can fetch data from an API or external source
    // For this example, we're just using static data
    this.setState({ projects: projectsData });
  }

  render() {
    return (
      <div className="app">
        <h1>My Projects</h1>
        <ProjectList projects={this.state.projects} />
      </div>
    );
  }
}

export default App;