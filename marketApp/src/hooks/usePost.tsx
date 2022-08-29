import axios from "axios"
import { useState } from "react";
import { useToast } from "react-native-toast-notifications";


const usePost = () => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)

    let toast = useToast()

    const post = async (url: string, postData: any) => {
        try {
            setLoading(true)
            const res = await axios.post(url, postData)
            setData(res.data)
            setLoading(false)
        } catch (error) {
            toast.show('Kullanıcı Bulunamadı')
            setLoading(false)
        }
    }

    return { data, loading, post }
}

export default usePost