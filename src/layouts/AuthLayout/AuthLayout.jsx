import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../../modules/sidebar";


function AuthLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <div className="flex h-screen">
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        <div
          className={`flex-1 transition-all duration-300 ${
            isSidebarOpen ? "ml-64" : "ml-0"
          }`}
        >
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default AuthLayout;
