import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(true);

  const init = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/users/get-user`,
        { withCredentials: true }
      );

      // console.log("FULL RESPONSE:", res.data);

      if (res.data.success) {
        const userData = res.data;

        setUser(userData);
        setLoading(false);
        // console.log("API USER:", userData); //
      } else {
        setUser(null);
      }
      const reportRes = await axios.get(
        `${import.meta.env.VITE_API_URL}/interview/reports`,
        { withCredentials: true }
      );

      setAnalysis(reportRes.data.data);

    } catch (err) {
      console.error("Init error:", err);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        analysis,
        setAnalysis,
        loading,
        setLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};