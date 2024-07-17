import React from "react";
import logo from "../../assets/logo.svg";
import { Link, Outlet } from "react-router-dom";
import AddProduct from "./../AddProduct/AddProduct";
const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        {/* start: Sidebar */}
        <div className="fixed left-0 top-0 w-64 h-full bg-gray-900 p-4 z-50 sidebar-menu transition-transform">
          <Link
            to="/"
            className="flex items-center pb-4 border-b border-b-gray-800"
          >
            <img src={logo} alt className=" rounded object-cover" />
          </Link>
          <ul className="mt-4">
            <li className="mb-1 group  ">
              <Link
                to="/dashboard/addProduct"
                className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
              >
                <i className="ri-home-2-line mr-3 text-lg" />
                <span className="text-sm">Add Product</span>
              </Link>
            </li>
            <li className="mb-1 group">
              <Link
                to="/dashboard/productList"
                className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100 sidebar-dropdown-toggle"
              >
                <i className="ri-instance-line mr-3 text-lg" />
                <span className="text-sm">Manage Product </span>
                <i className="ri-arrow-right-s-line ml-auto group-[.selected]:rotate-90" />
              </Link>
              <ul className="pl-7 mt-2 hidden group-[.selected]:block">
                <li className="mb-4">
                  <a
                    href="#"
                    className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3"
                  >
                    Active order
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="#"
                    className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3"
                  >
                    Completed order
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="#"
                    className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3"
                  >
                    Canceled order
                  </a>
                </li>
              </ul>
            </li>
            <li className="mb-1 group">
              <a
                href="#"
                className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100 sidebar-dropdown-toggle"
              >
                <i className="ri-flashlight-line mr-3 text-lg" />
                <span className="text-sm">Services</span>
                <i className="ri-arrow-right-s-line ml-auto group-[.selected]:rotate-90" />
              </a>
              <ul className="pl-7 mt-2 hidden group-[.selected]:block">
                <li className="mb-4">
                  <a
                    href="#"
                    className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3"
                  >
                    Manage services
                  </a>
                </li>
              </ul>
            </li>
            <li className="mb-1 group">
              <a
                href="#"
                className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
              >
                <i className="ri-settings-2-line mr-3 text-lg" />
                <span className="text-sm">Settings</span>
              </a>
            </li>
          </ul>
        </div>
    
      </div>
    </div>
  );
};

export default Dashboard;
