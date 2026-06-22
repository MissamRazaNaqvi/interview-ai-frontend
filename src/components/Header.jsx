import { Link, useNavigate } from "react-router-dom";
import { FaFileAlt } from "react-icons/fa";
import useAuth from "../hook/useAuth";
import axios from "axios";
import toast from "react-hot-toast";

function Header() {
    const { user, setUser } = useAuth();
    const navigate = useNavigate();

    const logoutHanlder = async () => {
        try {
            const res = await axios.get(
                `${import.meta.env.VITE_API_URL}/users/logout`,
                { withCredentials: true }
            );

            if (res?.data?.success) {
                navigate("/");
            }

            setUser(null);
            toast.success("User logged out successfully!");
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <nav className="sticky top-0 z-50 bg-surface border-b border-border shadow-lg backdrop-blur">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link
                    to="/"
                    className="flex items-center gap-2 text-heading hover:text-primary transition-colors"
                >
                    <FaFileAlt className="text-2xl text-primary" />
                    <h1 className="text-2xl font-bold">ResumeAI</h1>
                </Link>

                {/* Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <Link
                        to="/templates"
                        className="text-text hover:text-primary transition-colors font-medium"
                    >
                        Templates
                    </Link>
                    {user?.success ? <Link
                        to="/reports"
                        className="text-text hover:text-primary transition-colors font-medium"
                    >
                        My Reports
                    </Link>
                        : <Link
                            to="/analysis"
                            className="text-text hover:text-primary transition-colors font-medium"
                        >
                            AI Services
                        </Link>
                    }

                    <Link
                        to="/upload-resume"
                        className="text-text hover:text-primary transition-colors font-medium"
                    >
                        Analyse Resume
                    </Link>

                    <Link
                        to="/about"
                        className="text-text hover:text-primary transition-colors font-medium"
                    >
                        About
                    </Link>
                </div>

                {/* Auth Buttons */}
                {user?.success ? (
                    <div className="flex items-center gap-3">
                        <Link
                            to="/profile"
                            className="px-5 py-2 rounded-lg bg-card border border-border text-heading hover:bg-primary hover:border-primary transition-all duration-300"
                        >
                            Profile
                        </Link>

                        <button
                            onClick={logoutHanlder}
                            className="px-5 py-2 rounded-lg bg-primary text-white hover:bg-primary-hover transition-all duration-300"
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <div className="flex items-center gap-3">
                        <Link
                            to="/login"
                            className="px-5 py-2 rounded-lg border border-border bg-card text-text hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                        >
                            Login
                        </Link>

                        <Link
                            to="/register"
                            className="px-5 py-2 rounded-lg bg-primary text-white hover:bg-primary-hover transition-all duration-300 shadow-md"
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