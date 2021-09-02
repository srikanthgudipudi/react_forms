// Constants
export const ADD_CLIENT = "ADD_CLIENT"
export const EDIT_CLIENT = "EDIT_CLIENT"

export const addClientSuccess = client => ({
    type: ADD_CLIENT,
    payload: client,
})

// Actions
export function addClient(client) {
    return dispatch => {
        // dispatch(getClients())

        dispatch(addClientSuccess(client))
    }
};

export function editClient(client) {
    return dispatch => {
        return dispatch({
            type: EDIT_CLIENT,
            payload: client
        });
    }
};
