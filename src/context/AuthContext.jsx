import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  console.log(analysis,'analysis')
  const [loading, setLoading] = useState(true);

  const BASE_URL = "http://localhost:8000/api/v1";

  const getUser = async () => {
    try {
      console.log("Fetching user...");

      const res = await axios.get(
        `${BASE_URL}/users/get-user`,
        {
          withCredentials: true,
        }
      );

      console.log("User Response:", res.data);

      if (res?.data?.success === true) {
        setUser(res.data);
      }
    } catch (error) {
      console.error(
        "Get User Error:",
        error?.response?.data || error.message
      );
    }
  };

  const getReport = async () => {
    try {
      console.log("Fetching analysis report...");

      const res = await axios.get(
        `${BASE_URL}/interview/reports`,
        {
          withCredentials: true,
        }
      );

      console.log("Analysis Response:", res.data);

      if (res?.data?.success === true) {
        setAnalysis(res.data);
      }
    } catch (error) {
      console.error(
        "Get Report Error:",
        error?.response?.data || error.message
      );
    }
  };

  useEffect(() => {
    const initializeApp = async () => {
      try {
        await Promise.all([
          getUser(),
          getReport()
        ]);
      } finally {
        setLoading(false);
      }
    };

    initializeApp();
  }, []);

  console.log("Current User:", user);
  console.log("Current Analysis:", analysis);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        analysis,
        setAnalysis,
        loading,
        setLoading,
        getUser,
        getReport,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};