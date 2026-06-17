import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate()

    const onSubmit = (data) => {
        console.log(data);
        // API Call Here
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    Register
                </h1>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    {/* Username */}
                    <div>
                        <label className="block mb-2 font-medium text-gray-700">
                            Username
                        </label>

                        <input
                            type="text"
                            placeholder="Enter username"
                            className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                            {...register("username", {
                                required: "Username is required",
                                minLength: {
                                    value: 3,
                                    message: "Minimum 3 characters",
                                },
                            })}
                        />

                        {errors.username && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.username.message}
                            </p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block mb-2 font-medium text-gray-700">
                            Email
                        </label>

                        <input
                            type="email"
                            placeholder="Enter email"
                            className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                            {...register("email", {
                                required: "Email is required",
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
                            placeholder="Enter password"
                            className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Minimum 6 characters",
                                },
                            })}
                        />

                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        Register
                    </button>
                </form>

                <p className="text-center mt-5 text-gray-600">
                    Already have an account?{" "}
                    <span className="text-blue-600 cursor-pointer hover:underline" onClick={()=>{navigate('/login')}}>
                        Login
                    </span>
                </p>
            </div>
        </div>
    );
}

export default Register;