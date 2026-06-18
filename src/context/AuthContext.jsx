import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext(); // Export this

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()

    const getUser = async()=>{
        try {
            const res = await axios.get("http://localhost:8000/api/v1/users/get-user", { withCredentials: true});

            // console.log("API Response:", res);
      
            if(res?.data?.success == true){
              navigate('/')
            }

            setUser(res?.data)
            setLoading(false)

        } catch (error) {
            console.error("login Error:", error.message);
        }
    }

    useEffect(() => {
        getUser()
    }, [])
    
    console.log(user,"user from context ")

    return (
        <UserContext.Provider value={{ user, setUser, loading, setLoading}}>
            {children}
        </UserContext.Provider>
    );
};