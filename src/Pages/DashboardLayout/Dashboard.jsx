import { Link, Outlet, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { FaHome, FaUser, FaBox, FaHistory, FaUsers, FaPlusCircle } from "react-icons/fa";
import { auth } from "../../Firebase/Firebase.config";

const Dashboard = () => {
  const { user, signOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logout successful");
        navigate("/");
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-zinc-950">
      {/* Sidebar */}
      <div className="w-64 bg-white dark:bg-zinc-900 border-r dark:border-zinc-800 p-6 space-y-8">
        <Link to="/" className="flex items-center justify-center ">
          <h2 className="text-2xl font-black text-emerald-500">HUB Panel</h2>
        </Link>

        <nav className="space-y-2">
          <Link to="/dashboard" className="flex items-center gap-3 p-3 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-xl font-bold text-gray-600 dark:text-zinc-400">
            <FaHome /> Overview
          </Link>

          {/* Admin Routes */}
          {user?.role === "admin" && (
            <>
              <Link to="/dashboard/all-users" className="flex items-center gap-3 p-3 hover:bg-emerald-50 rounded-xl font-bold">
                <FaUsers /> All Users
              </Link>
              <Link to="/dashboard/manage-products" className="flex items-center gap-3 p-3 hover:bg-emerald-50 rounded-xl font-bold">
                <FaBox /> Manage Products
              </Link>
            </>
          )}

          {/* Exporter/User Routes */}
          {user?.role === "user" && (
            <>
              <Link to="/dashboard/add-product" className="flex items-center gap-3 p-3 hover:bg-emerald-50 rounded-xl font-bold">
                <FaPlusCircle /> Add Product
              </Link>
              <Link to="/dashboard/MyImports" className="flex items-center gap-3 p-3 hover:bg-emerald-50 rounded-xl font-bold">
                <FaBox /> MyImports
              </Link>
              <Link to="/dashboard/MyExports" className="flex items-center gap-3 p-3 hover:bg-emerald-50 rounded-xl font-bold">
                <FaHistory /> MyExports
              </Link>
            </>
          )}

          <Link to="/dashboard/profile" className="flex items-center gap-3 p-3 hover:bg-emerald-50 rounded-xl font-bold">
            <FaUser /> My Profile
          </Link>
        </nav>

        <button onClick={handleLogout} className="w-full py-3 bg-red-50 text-red-600 font-bold rounded-xl mt-10">
          Log Out
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;