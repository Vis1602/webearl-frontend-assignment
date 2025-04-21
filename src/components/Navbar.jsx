import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => setIsMobileMenuOpen((prev) => !prev);

  return (
    <header className="bg-white py-5 px-5 shadow-sm">
      <nav className="flex justify-between items-center max-w-[965px] mx-auto relative">
        {/* Logo */}
        <Link to="/" className="text-2xl font-extrabold text-black">
          <img src={logo} alt="Agency Logo" className="h-10 w-auto" />
        </Link>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex gap-6 text-[16px]">
            {["/services", "/values", "/case-studies", "/blog", "/inner-pages"].map((path, i) => (
              <Link
                key={path}
                to={path}
                className={`transition-all pb-1 ${
                  isActive(path)
                    ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                    : "text-gray-700 hover:text-blue-500"
                }`}
              >
                {["Services", "Our Values", "Case Studies", "Blog", "Inner Pages"][i]}
              </Link>
            ))}
          </div>

          <div className="flex gap-3 ml-6">
            <Link
              to="/login"
              className="px-4 py-2 border border-gray-800 rounded-lg hover:bg-gray-100 transition"
            >
              LOGIN
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              REGISTER
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-t mt-2 p-5 flex flex-col gap-4 md:hidden z-10 shadow-lg">
            {["/services", "/values", "/case-studies", "/blog", "/inner-pages"].map((path, i) => (
              <Link
                key={path}
                to={path}
                className={`block transition-all ${
                  isActive(path)
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-500"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {["Services", "Our Values", "Case Studies", "Blog", "Inner Pages"][i]}
              </Link>
            ))}

            <hr />

            <Link
              to="/login"
              className="px-4 py-2 border border-gray-800 rounded-lg hover:bg-gray-100 transition text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              LOGIN
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              REGISTER
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
