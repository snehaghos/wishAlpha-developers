import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import "../../dashboard/context/features/useDashboardContext"
import { useDashboardContext } from "../../dashboard/context/features/useDashboardContext";



export function Sidebar() {
  const { isOpen, setIsOpen } = useDashboardContext();

  const menuItems = [
    "Home",
    "Profile",
    "Settings",
    "Logout",
    "Games",
    "Developers",
    "Dashboard",
  ];

  return (
    <div className={`bg-gray-800 p-5 transition-all duration-300 ${isOpen ? "w-64" : "w-20"}`}>
      <button onClick={() => setIsOpen(!isOpen)} className="text-white mb-4">
        {isOpen ? <X className="hover:bg-gray-500" size={36} /> : <Menu  className="hover:bg-gray-500" size={36} />}
      </button>
      <ul className="space-y-4">
        {menuItems.map((item) => (
          <li key={item} className="cursor-pointer hover:text-blue-400 hover:bg-gray-500 transition duration-300">
            <Link to={`/${item.toLowerCase()}`} className="block p-2">
              {isOpen ? item : item[0]}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
