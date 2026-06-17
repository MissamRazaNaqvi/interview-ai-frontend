import { useContext } from "react";
import { UserContext } from "../context/AuthContext";

const useAuth = () => {

    const context = useContext(UserContext);

    if (!context) {
        throw new Error(
            "useAuth must be used inside UserProvider"
        );
    }

    return context;

}

export default useAuth;