import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "./reducers";

const UserProvider = ({ children }: any) => {

    const store = configureStore<any>({ reducer: counterReducer }) // any yazınca reducer kızmayı bıraktı

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default UserProvider