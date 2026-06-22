import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      try {
        const userRes = await axios.get(`${import.meta.env.VITE_API_URL}/users/get-user`, {
          withCredentials: true,
        });

        if (!userRes.data.success) {
          setUser(null);
          setLoading(false);
          return;
        }

        setUser(userRes.data.data);

        const reportRes = await axios.get(
          `${BASE_URL}/interview/reports`,
          { withCredentials: true }
        );

        setAnalysis(reportRes.data.data);
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

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