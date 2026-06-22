export const apiHandler = async (apiCall) => {
    // console.log(apiCall, "apiCall")
    try {
      const response = await apiCall();
        // console.log(response,"response")
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        message:
          error.response?.data?.message ||
          error.message,
      };
    }
  };