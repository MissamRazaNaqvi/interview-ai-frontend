import { Link, useNavigate } from "react-router-dom";
import { FaFileAlt } from "react-icons/fa";
import useAuth from "../hook/useAuth";
import axios from "axios";
import toast from "react-hot-toast";

function Header() {
    const { user, setUser } = useAuth()
    const navigate = useNavigate()

    const logoutHanlder = async () => {
        try {
            const res = await axios.get("http://localhost:8000/api/v1/users/logout", { withCredentials: true });

            console.log("API Response:", res.data);

            if (res?.data?.success == true) {
                navigate('/')
            }

            setUser(null)

            toast.success("User log Out successfully!");

            // Example: Reset form
            // reset();
            // navigate("/login");

        } catch (error) {
            // console.error("login Error:", error.message);
            toast.error(error.message)
        }
    }

    return (
        <nav className="shadow-md bg-gray-800">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                <Link to="/" className="flex items-center gap-2">
                    <FaFileAlt className="text-2xl" />
                    <h1 className="text-2xl font-bold">ResumeAI</h1>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <Link to="/templates" className="font-medium">Templates</Link>
                    <Link to="/analysis" className="font-medium">AI Services</Link>
                    <Link to="/upload-resume" className="font-medium">Analyse Resume</Link>
                    
                    <Link to="/about" className="font-medium">About</Link>
                </div>

                {user?.success ? (

                    <div className="flex items-center gap-3">
                        <Link to="/profile" className="px-5 py-2 bg-gray-700 text-white rounded-lg transition">
                            Profile
                        </Link>

                        <button onClick={logoutHanlder}
                            className="px-5 py-2 bg-gray-700 text-white rounded-lg transition">
                            Logout
                        </button>
                    </div>

                ) : (
                    <div className="flex items-center gap-3">
                        <Link to="/login"
                            className="px-5 py-2 border border-gray-300 rounded-lg hover:bg-gray-600 hover:text-white transition"
                        >Login</Link>

                        <Link to="/register"
                            className="px-5 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-700 transition"
                        >Register</Link>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Header;