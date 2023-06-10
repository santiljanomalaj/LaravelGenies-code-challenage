import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";


import Navbar from "./components/Navbar"
import Landing from "./components/Landing"
import DeveloperList from "./components/DeveloperList";
import ProjectList from "./components/ProjectList";
import DeveloperForm from './components/DeveloperForm';
import ProjectForm from './components/ProjectForm';


function App() {
  return (
    <Router>
      <Navbar />
      {/* <Landing /> */}
      <div className="container">
        <br />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route exact path="/developers" element={<DeveloperList />} />
          <Route exact path="/developers/new" element={<DeveloperForm isEdit={false} />} />
          <Route exact path="/developers/:id/edit" element={<DeveloperForm isEdit={true} />} />
          <Route exact path="/projects" element={<ProjectList />} />
          <Route exact path="/projects/new" element={<ProjectForm />} />
          <Route exact path="/projects/:id/edit" element={<ProjectForm />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;

