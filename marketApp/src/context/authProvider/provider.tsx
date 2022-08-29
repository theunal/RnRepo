import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit';
import authRecuder from "./reducer";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthProvider = ({ children }: any) => {

    const [token, setToken] = useState('')
    const [loading, setLoading] = useState(true)

    const store = configureStore<any>({ reducer: authRecuder })

    useEffect(() => {
        AsyncStorage.getItem('token').then(x => {
            if (x !== '')
            setToken(token)
            setLoading(false)
        })
    }, [])
    

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default AuthProvider