import initialState from "./job.state"

const jobReducer = (state = initialState, action: any) => {
    switch (action.type) {

        case 'add_job':
            const { favouriteJob } = action.payload;
            return {
                ...state,
                favoriteJobs: [...state.favoriteJobs, favouriteJob]
            }

        case 'delete_job':
            const { id } = action.payload
            return state.favoriteJobs.filter((x: any) => x.id !== id)

        default:
            return state
    }
}

export default jobReducer