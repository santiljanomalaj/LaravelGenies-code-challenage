import axios from 'axios';

export const FETCH_DEVELOPERS_REQUEST = 'FETCH_DEVELOPERS_REQUEST';
export const FETCH_DEVELOPERS_SUCCESS = 'FETCH_DEVELOPERS_SUCCESS';
export const FETCH_DEVELOPERS_FAILURE = 'FETCH_DEVELOPERS_FAILURE';

export const CREATE_DEVELOPER_REQUEST = 'CREATE_DEVELOPER_REQUEST';
export const CREATE_DEVELOPER_SUCCESS = 'CREATE_DEVELOPER_SUCCESS';
export const CREATE_DEVELOPER_FAILURE = 'CREATE_DEVELOPER_FAILURE';

export const UPDATE_DEVELOPER_REQUEST = 'UPDATE_DEVELOPER_REQUEST';
export const UPDATE_DEVELOPER_SUCCESS = 'UPDATE_DEVELOPER_SUCCESS';
export const UPDATE_DEVELOPER_FAILURE = 'UPDATE_DEVELOPER_FAILURE';

export const DELETE_DEVELOPER_REQUEST = 'DELETE_DEVELOPER_REQUEST';
export const DELETE_DEVELOPER_SUCCESS = 'DELETE_DEVELOPER_SUCCESS';
export const DELETE_DEVELOPER_FAILURE = 'DELETE_DEVELOPER_FAILURE';

export const fetchDevelopersRequest = () => {
    return {
        type: FETCH_DEVELOPERS_REQUEST
    };
};

export const fetchDevelopersSuccess = developers => {
    return {
        type: FETCH_DEVELOPERS_SUCCESS,
        payload: developers
    };
};

export const fetchDevelopersFailure = error => {
    return {
        type: FETCH_DEVELOPERS_FAILURE,
        payload: error
    };
};

export const createDeveloperRequest = () => {
    return {
        type: CREATE_DEVELOPER_REQUEST
    };
};

export const createDeveloperSuccess = developer => {
    return {
        type: CREATE_DEVELOPER_SUCCESS,
        payload: developer
    };
};

export const createDeveloperFailure = error => {
    return {
        type: CREATE_DEVELOPER_FAILURE,
        payload: error
    };
};

export const updateDeveloperRequest = () => {
    return {
        type: UPDATE_DEVELOPER_REQUEST
    };
};

export const updateDeveloperSuccess = developer => {
    return {
        type: UPDATE_DEVELOPER_SUCCESS,
        payload: developer
    };
};

export const updateDeveloperFailure = error => {
    return {
        type: UPDATE_DEVELOPER_FAILURE,
        payload: error
    };
};

export const deleteDeveloperRequest = () => {
    return {
        type: DELETE_DEVELOPER_REQUEST
    };
};

export const deleteDeveloperSuccess = id => {
    return {
        type: DELETE_DEVELOPER_SUCCESS,
        payload: id
    };
};

export const deleteDeveloperFailure = error => {
    return {
        type: DELETE_DEVELOPER_FAILURE,
        payload: error
    };
};

export const fetchDevelopers = () => {
    return dispatch => {
        dispatch(fetchDevelopersRequest());
        axios.get('/api/developers')
            .then(response => {
                const developers = response.data;
                dispatch(fetchDevelopersSuccess(developers));
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(fetchDevelopersFailure(errorMsg));
            });
    };
};

export const createDeveloper = developer => {
    return dispatch => {
        dispatch(createDeveloperRequest());
        axios.post('/api/developers', developer)
            .then(response => {
                const createdDeveloper = response.data;
                dispatch(createDeveloperSuccess(createdDeveloper));
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(createDeveloperFailure(errorMsg));
            });
    };
};

export const updateDeveloper = developer => {
    return dispatch => {
        dispatch(updateDeveloperRequest());
        axios.put(`/api/developers/${developer.id}`, developer)
            .then(response => {
                const updatedDeveloper = response.data;
                dispatch(updateDeveloperSuccess(updatedDeveloper));
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(updateDeveloperFailure(errorMsg));
            });
    };
};

export const deleteDeveloper = id => {
    return dispatch => {
        dispatch(deleteDeveloperRequest());
        axios.delete(`/api/developers/${id}`)
            .then(() => {
                dispatch(deleteDeveloperSuccess(id));
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(deleteDeveloperFailure(errorMsg));
            });
    };
};