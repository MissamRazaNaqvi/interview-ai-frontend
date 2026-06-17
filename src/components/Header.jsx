import { Link, useNavigate } from "react-router-dom";
import { FaFileAlt } from "react-icons/fa";
import useAuth from "../hook/useAuth";
import axios from "axios";
import toast from "react-hot-toast";

function Header() {
    const { user } = useAuth()
    const navigate = useNavigate()

    console.log(user, "useruseruseruser")


    const { setUser } = useAuth();

    const logoutHanlder = async () => {
        try {
            const res = await axios.get("http://localhost:8000/api/v1/users/logout", { withCredentials: true });

            console.log("API Response:", res.data);

            if (res?.data?.success == true) {
                navigate('/')
            }

            setUser(null)

            // Example: Show success message
            toast.success("User log Out successfully!");

            // Example: Reset form
            // reset();

            // Example: Navigate to login page
            // navigate("/login");

        } catch (error) {

            console.error("login Error:", error.message);

            toast.error(error.message)

        }
    }


    console.log(user, "user front header file ")

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <FaFileAlt className="text-blue-600 text-2xl" />
                    <h1 className="text-2xl font-bold text-gray-800">
                        ResumeAI
                    </h1>
                </Link>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-8">
                    <Link
                        to="/"
                        className="text-gray-700 hover:text-blue-600 font-medium"
                    >
                        Home
                    </Link>

                    <Link
                        to="/templates"
                        className="text-gray-700 hover:text-blue-600 font-medium"
                    >
                        Templates
                    </Link>

                    <Link
                        to="/analysis"
                        className="text-gray-700 hover:text-blue-600 font-medium"
                    >
                        AI Analysis
                    </Link>

                    <Link
                        to="/about"
                        className="text-gray-700 hover:text-blue-600 font-medium"
                    >
                        About
                    </Link>
                </div>

                {user?.success ? (
                    
                     <div className="flex items-center gap-3">
    
                     {/* Profile Button */}
                     <Link
                       to="/profile"
                       className="px-5 py-2 border border-green-600 text-green-600 rounded-lg hover:bg-green-600 hover:text-white transition"
                     >
                       Profile
                     </Link>
                 
                     {/* Logout Button */}
                     <button
                        onClick={logoutHanlder}
                        className="px-5 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-500 transition"
                    >
                        Logout
                    </button>
                 
                   </div>

                ) : (
                    <div className="flex items-center gap-3">
                        <Link
                            to="/login"
                            className="px-5 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition"
                        >
                            Login
                        </Link>

                        <Link
                            to="/register"
                            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                        >
                            Register
                        </Link>
                    </div>
                )}

            </div>
        </nav>
    );
}

export default Header;