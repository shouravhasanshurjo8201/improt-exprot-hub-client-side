
import { useContext, useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import { auth } from "../../Firebase/Firebase.config";
import { signOut } from "firebase/auth";
import toast from "react-hot-toast";
import Logo from "../../assets/logo.png";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
    const { user, setUser } = useContext(AuthContext);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const navigate = useNavigate();

    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

    const publicLinks = [
        { to: "/", label: "Home" },
        { to: "/products", label: "All Products" },
        { to: "/about", label: "About Us" },
    ];

    const privateLinks = [
       
        { to: "/dashboard", label: "Dashboard" },
    ];

    const activeClass = ({ isActive }) =>
        isActive ? "btn-primary shadow-md rounded-xl" : "btn-secondary rounded-xl opacity-90";

    const renderLinks = (links) =>
        links.map((link) => (
            <li key={link.to}>
                <NavLink to={link.to} className={activeClass}>
                    {link.label}
                </NavLink>
            </li>
        ));

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                setUser(null);
                toast.success("Logout successful");
                navigate("/");
                setProfileOpen(false);
            })
            .catch((err) => toast.error(err.message));
    };

    return (
        <div className="w-full sticky top-0 z-[1000] bg-base-100 shadow-md border-b border-base-300">
            <div className="container mx-auto navbar py-3">

                {/* Navbar Start */}
                <div className="navbar-start flex items-center gap-2">
                    {/* Mobile Menu */}
                    <div className="dropdown">
                        <button
                            className="btn btn-ghost lg:hidden text-2xl"
                            onClick={() => setMobileOpen(!mobileOpen)}
                        >
                            ☰
                        </button>
                        {mobileOpen && (
                            <ul className="menu menu-sm dropdown-content mt-3 p-4 gap-2 shadow-xl bg-base-100 dark:bg-base-100 rounded-2xl w-40 z-[100]">
                                {renderLinks(publicLinks)}
                                {user && renderLinks(privateLinks)}
                            </ul>
                        )}
                    </div>

                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <img src={Logo} alt="logo" className="h-10 rounded-lg" />
                    </Link>
                </div>

                {/* Navbar Center (Desktop) */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-2">
                        {renderLinks(publicLinks)}
                        {user && renderLinks(privateLinks)}
                    </ul>
                </div>

                {/* Navbar End */}
                <div className="navbar-end flex items-center gap-3">
                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="btn btn-circle btn-ghost"
                        title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
                    >
                        {theme === "light" ? <FaMoon size={18} /> : <FaSun size={18} />}
                    </button>

                    {user ? (
                        <div className="relative">
                            {/* Profile Button */}
                            <button
                                className="btn btn-ghost btn-circle avatar border-2 border-primary"
                                onClick={() => setProfileOpen(!profileOpen)}
                            >
                                <div className="w-10 rounded-full">
                                    <img
                                        src={user?.photoURL || "https://i.ibb.co/mJR9Qhx/user-placeholder.png"}
                                        alt="user"
                                    />
                                </div>
                            </button>

                            {/* Profile Dropdown */}
                            {profileOpen && (

                                <ul className="absolute right-0 mt-3 md:mt-5 p-4 w-40 md:w-48 bg-base-100 shadow-xl rounded-b-2xl z-[100] text-base-100 dark:text-base-100">

                                    <li className="mb-1">
                                        <Link
                                            to="/dashboard"
                                            onClick={() => setProfileOpen(false)}
                                            className="btn btn-ghost w-full text-left text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition"
                                        >
                                            Dashboard
                                        </Link>
                                    </li>

                                    <li className="mb-1">
                                        <Link
                                            to="/dashboard/profile"
                                            onClick={() => setProfileOpen(false)}
                                            className="btn btn-ghost w-full text-left rounded-lg hover:bg-primary text-primary font-bold hover:text-white transition"
                                        >
                                            Profile
                                        </Link>
                                    </li>

                                    <li className="mb-2">
                                        <Link
                                            to="/dashboard/updateProfile"
                                            onClick={() => setProfileOpen(false)}
                                            className="btn text-primary font-bold btn-ghost w-full text-left rounded-lg hover:bg-primary hover:text-white transition"
                                        >
                                            Update Profile
                                        </Link>
                                    </li>

                                    <hr className="my-2 border-base-300 dark:border-gray-700" />

                                    <li>
                                        <button
                                            onClick={handleLogout}
                                            className="btn btn-ghost w-full text-left text-red-500 hover:bg-red-500 hover:text-white rounded-lg transition"
                                        >
                                            Logout
                                        </button>
                                    </li>
                                </ul>

                            )}
                        </div>
                    ) : (
                        <div className="flex gap-2">
                            <Link to="/login" className="btn-secondary">
                                Login
                            </Link>
                            <Link to="/signup" className="btn-primary hidden sm:flex">
                                Sign Up
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
