import { Link } from "react-router-dom";
import { FaFileAlt } from "react-icons/fa";

function Header() {
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

        {/* Buttons */}
        <div className="flex gap-3">
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

      </div>
    </nav>
  );
}

export default Header;