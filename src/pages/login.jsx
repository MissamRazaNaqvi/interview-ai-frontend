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
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/users/login`, data,{ withCredentials: true});
  
      // console.log("API Response:", res.data);

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

      // console.error("login Error:", error.message);

      toast.error("invalid credential")
     
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md bg-surface rounded-xl shadow-xl border border-border p-8">
        <h1 className="text-3xl font-bold text-center text-text mb-6">
          Login
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          {/* Email */}
          <div>
            <label className="block mb-2 font-medium text-text">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-border bg-background text-text px-4 py-2 outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
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
            <label className="block mb-2 font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-border bg-background text-text px-4 py-2 outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
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
            className="w-full bg-primary hover:bg-primaryHover text-white py-2 rounded-lg transition"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-5 text-textSecondary">
          Don't have an account?{" "}
          <span className="text-primary hover:underline cursor-pointer" onClick={()=>{navigate('/register')}}>
            Register
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;