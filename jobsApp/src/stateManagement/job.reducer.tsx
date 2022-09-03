import initialState from "./job.state"

const jobReducer = (state = initialState, action: any) => {
    switch (action.type) {

        case 'add_job':
            const { favouriteJob } = action.payload

            if (state.favoriteJobs.length > 0 && isAdded(state.favoriteJobs, favouriteJob.id))
                return state

            return {
                ...state,
                favoriteJobs: [...state.favoriteJobs, favouriteJob]
            }

        case 'delete_job':
            const { id } = action.payload
            return {
                ...state,
                favoriteJobs: state.favoriteJobs.filter((x: any) => x.id !== id)
            }

        default:
            return state
    }
}

const isAdded = (favouriteJobs: any[], id: number) => favouriteJobs.some(x => x.id == id)

export default jobReducer