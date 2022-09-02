import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit';
import jobReducer from "./job.reducer";

const JobProvider = ({ children }: any) => {

    const store = configureStore<any>({ reducer: jobReducer })

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default JobProvider