import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import axios from "axios";

import { apiHandler } from "../apiHandler/apiHandler";

function Register() {

    const { register, handleSubmit, formState: { errors }, } = useForm();
    const navigate = useNavigate()
    const onSubmit = async (data) => {

        try {
            const res = await axios.post(`${import.meta.env.VITE_API_URL}/users/register`,
                data, { withCredentials: true});

            // console.log("API Response:", res.data);

            if (res?.data?.success == true) {
                navigate('/')
            }

            toast.success("User registered successfully!");

            navigate("/login");

        } catch (error) {
            // console.error("Registration Error:", error.message);

            toast.error(error.message);
        }
    };

    return (
        <div className="min-h-[calc(100vh-198px)] flex items-center justify-center bg-background px-4">
            <div className="w-full max-w-md rounded-xl bg-surface border border-border shadow-xl p-8">
                <h1 className="ext-3xl font-bold text-center text-text mb-6">
                    Register
                </h1>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    {/* Username */}
                    <div>
                        <label className="block mb-2 font-medium text-text">Username</label>

                        <input type="text" placeholder="Enter username"
                            className="w-full rounded-lg border border-border bg-background text-text px-4 py-2 outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
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
                        <label className="block mb-2 font-medium text-text">
                            Email
                        </label>

                        <input type="email" placeholder="Enter email"
                            className="w-full rounded-lg border border-border bg-background text-text px-4 py-2 outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
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
                        <label className="block mb-2 font-medium text-text">
                            Password
                        </label>

                        <input type="password" placeholder="Enter password"
                            className="w-full rounded-lg border border-border bg-background text-text px-4 py-2 outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
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
                        className="w-full bg-primary hover:bg-primaryHover text-white py-2 rounded-lg transition"
                    >
                        Register
                    </button>
                </form>

                <p className="text-center mt-5 text-textSecondary">
                    Already have an account?{" "}
                    <span className="text-primary cursor-pointer hover:underline" onClick={() => { navigate('/login') }}>
                        Login
                    </span>
                </p>
            </div>
        </div>
    );
}

export default Register;