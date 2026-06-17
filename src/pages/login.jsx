import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useAuth from "../hook/useAuth";
import axios from "axios";
import toast from 'react-hot-toast';


function Login() {
  const { register, handleSubmit, formState: { errors }} = useForm();

  const {setUser}= useAuth();

  const navigate = useNavigate()

  const onSubmit = async (data) => {
    console.log("Form Data:", data);
  
    try {
      const res = await axios.post("http://localhost:8000/api/v1/users/login", data,{ withCredentials: true});
  
      console.log("API Response:", res.data);

      if(res?.data?.success == true){
        navigate('/')
      }
  
      setUser(res.data)

      // Example: Show success message
      toast.success("User logged In successfully!");
  
      // Example: Reset form
      // reset();
  
      // Example: Navigate to login page
      // navigate("/login");
  
    } catch (error) {

      console.error("login Error:", error.message);

      toast.error(error.message)
     
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          {/* Email */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Enter a valid email",
                },
              })}
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-5 text-gray-600">
          Don't have an account?{" "}
          <span className="text-blue-600 hover:underline cursor-pointer" onClick={()=>{navigate('/register')}}>
            Register
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;