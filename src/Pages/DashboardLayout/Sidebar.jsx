import { Link, useLocation } from "react-router-dom";
import { FaHome, FaTable, FaUserCog, FaChartBar } from "react-icons/fa";

const Sidebar = ({ role }) => {
  const location = useLocation();

  const menuItems = [
    { name: "Home", path: "/dashboard", icon: <FaHome /> },
    { name: "Data Table", path: "/dashboard/table", icon: <FaTable /> },
  ];

  if (role === "admin") {
    menuItems.push(
      { name: "Analytics", path: "/dashboard/analytics", icon: <FaChartBar /> },
      { name: "Manage Users", path: "/dashboard/users", icon: <FaUserCog /> }
    );
  }

  return (
    <aside className="w-64 bg-white shadow flex-shrink-0">
      <div className="p-6 font-bold text-xl border-b">Menu</div>
      <ul className="menu p-4 space-y-2">
        {menuItems.map((item) => (
          <li key={item.name} className={location.pathname === item.path ? "bg-emerald-100 rounded" : ""}>
            <Link to={item.path} className="flex items-center gap-2">
              {item.icon} {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
