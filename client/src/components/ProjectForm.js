import React, { useState, useEffect } from 'react';
import { useParams,  } from 'react-router-dom';
import { connect } from 'react-redux';

import { createProject, readProject, updateProject } from '../redux/actions/projectActions';

const ProjectForm = ({ currentProject, createProject, updateProject, readProject }) => {
    const [title, setTitle] = useState(currentProject ? currentProject.title : '');
    const [description, setDescription] = useState(currentProject ? currentProject.description : '');
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            readProject(id);
        }
    }, [id]);

    useEffect(() => {
        setTitle(currentProject ? currentProject.title : '');
        setDescription(currentProject ? currentProject.description : '');
        
    }, [currentProject]);
    
    // const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        const project = { title, description };
        if (currentProject) {
            updateProject(currentProject.id, project);
        } else {
            createProject(project);
        }

        // history.push('/projects'); // Redirect to a new page

        setTitle('');
        setDescription('');

    };

    return (
        <div className="container">
            <h1>{currentProject ? 'Edit' : 'Add'} Project</h1>
            <form onSubmit={handleSubmit} >
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea
                        className="form-control"
                        id="description"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-5" >{currentProject ? 'Update' : 'Create'}</button>
            </form>
        </div>
    );
};

const mapStateToProps = state => ({
    currentProject: state.projectReducer.currentProject
});

export default connect(mapStateToProps, { createProject, updateProject, readProject })(ProjectForm);