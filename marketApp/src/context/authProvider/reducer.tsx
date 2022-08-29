import initialState from "./state"


const authRecuder = (state = initialState, action: any) => {
    switch (action.type) {
        case 'set_token':
            return { ...state, token: action.payload.token }

        default:
            return state
    }
}

export default authRecuder