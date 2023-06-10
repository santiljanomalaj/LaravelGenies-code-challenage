import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { createDeveloper, updateDeveloper, readDeveloper } from '../../redux/actions/developerActions';


const DeveloperForm = ({ isEdit, currentDeveloper, readDeveloper, createDeveloper, updateDeveloper }) => {
    const [name, setName] = useState(currentDeveloper ? currentDeveloper.name : '');
    const [email, setEmail] = useState(currentDeveloper ? currentDeveloper.email : '');
    const [role, setRole] = useState(currentDeveloper ? currentDeveloper.role : '');
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            readDeveloper(id);
        }
    }, [id]);

    useEffect(() => {
        setName(currentDeveloper ? currentDeveloper.name : '');
        setEmail(currentDeveloper ? currentDeveloper.email : '');
        setRole(currentDeveloper ? currentDeveloper.role : '');
    }, [currentDeveloper]);

    const handleSubmit = e => {
        e.preventDefault();
        
        const developer = { name, email, role };

        if (currentDeveloper) {
            updateDeveloper(currentDeveloper.id, developer);

            alert('Developer successfully updated!');

        } else {
       
            createDeveloper(developer);
            alert('Developer successfully created!');

        }

        setName('');
        setEmail('');
        setRole('');
       
    };

    return (
        <div className="container">
            <h1>{currentDeveloper ? 'Edit' : 'Add'} Developer</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="role">Role:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="role"
                        value={role}
                        onChange={e => setRole(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-5">{currentDeveloper ? 'Update' : 'Create'}</button>
            </form>
        </div>
    );
};

const mapStateToProps = state => ({
    currentDeveloper: state.developerReducer.currentDeveloper,

});


export default connect(mapStateToProps, { createDeveloper, updateDeveloper, readDeveloper })(DeveloperForm);