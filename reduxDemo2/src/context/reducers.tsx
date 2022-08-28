import initialState from "./store"

const counterReducer = (state = initialState, action: any) => { // fonksiyonlar

    switch (action.type) {
        case 'add_name':
            return { ...state, nameList: [...state.nameList, action.payload.name] }

        default:
            return state
    }
}

export default counterReducer