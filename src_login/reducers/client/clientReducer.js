import * as actions from '../../actions/client/clientActions'

export const initialState = {
    loading: false,
    hasErrors: false,
    clients: [
        // { "id": 1, "clientName": "Cardinal", "clientDescription": "Cardinal", "status": "Active" },
        // { "id": 2, "clientName": "Maxor Audit Tool", "clientDescription": "Maxor Audit Tool Main Client", "status": "Active" },
        // { "id": 3, "clientName": "Maxor Split Billing", "clientDescription": "Maxor Split Billing", "status": "Active" },
        // { "id": 4, "clientName": "McKesson", "clientDescription": "McKesson", "status": "Active" },
        // { "id": 5, "clientName": "Maxor Audit Tool", "clientDescription": "Maxor Audit Tool Main Client", "status": "Active" },
        // { "id": 6, "clientName": "Maxor Split Billing", "clientDescription": "Maxor Split Billing", "status": "Active" },
        // { "id": 7, "clientName": "McKesson", "clientDescription": "McKesson", "status": "Active" }
    ]
}

export default function clientReducer(state = initialState, action) {
    switch (action.type) {
        case actions.ADD_CLIENT:
            return {
                ...state,
                clients: [...state.clients, action.payload]
            }
        case actions.EDIT_CLIENT:
            return {
                ...state,
                clients: state.clients.map(
                    (client) => client.id === action.payload.id ? {
                        ...client,
                        clientName: action.payload.clientName,
                        clientDescription: action.payload.clientDescription,
                        status: action.payload.status
                    }
                        : client)
            };
        default:
            return state
    }
}