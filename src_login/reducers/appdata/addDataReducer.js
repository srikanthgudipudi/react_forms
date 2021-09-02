import * as actions from '../../actions/appdata/addDataActions'

export const initialState = {
    loading: false,
    hasErrors: false,
    user: {},
    login: false,
}

export default function addDataReducer(state = initialState, action) {
    switch (action.type) {
        case actions.GET_DATA:
            return { ...state, loading: true }
        case actions.GET_DATA_SUCCESS:
            return { ...state, user: action.payload, loading: false, hasErrors: false, login: action.payload.login }
        case actions.GET_DATA_FAILURE:
            return { ...state, login: false, hasErrors: true }
            case actions.GET_LOGIN_FAILURE:
                return{ ...state, hasErrors: true, login: false}
        default:
            return state
    }
}