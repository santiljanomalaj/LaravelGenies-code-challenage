import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';


import { readDevelopers, deleteDeveloper } from '../redux/actions/developerActions';

const DeveloperList = ({ developers, readDevelopers, deleteDeveloper }) => {
    useEffect(() => {
        readDevelopers();
    }, [readDevelopers]);

    const onDeleteClick = id => {
        
        deleteDeveloper(id);
    };

    return (
        <div className="container">
            <h1>Developers</h1>
            

            <Link to="/developers/new" className="btn btn-primary mt-5 mb-5">New</Link>

          
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {developers.map(dev => (
                        <tr key={dev.id}>
                            <td>{dev.name}</td>
                            <td>{dev.email}</td>
                            <td>{dev.role}</td>
                            <td>
                                <Link to={`/developers/${dev.id}/edit`} className="btn btn-primary">Edit</Link>{' '}
                                <button onClick={() => onDeleteClick(dev.id)} className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const mapStateToProps = state => ({
    developers: state.developerReducer.developers
});

export default connect(mapStateToProps, { readDevelopers, deleteDeveloper })(DeveloperList);