import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import useAdmin from "../../Hooks/useAdmin";

const Navbar = () => {
  // const isAdmin = false
  const [isAdmin]= useAdmin()
  const [MobileMenu, setMobileMenu] = useState(false);
  const { user, logOut } = useAuth();
  const handleSignOut = async () => {
    const toastId= toast.loading('Loading .. !!')
    try {
      await logOut();
      toast.success('Logout Successfully',{id:toastId})
    } catch (error) {
      toast.error(error.message ,{id:toastId})
    }
  };
  return (
    <div>
      <header className="header">
        <div className="container flex justify-between">
          <div className="catgrories  flex items-center">
            <span class="fa-solid fa-border-all"></span>
            <h4 className="flex items-center">
              Categories <i className="fa fa-chevron-down"></i>
            </h4>
          </div>

          <div className="navlink  ">
            <ul
              className={MobileMenu ? " " : "flex items-center capitalize"}
              onClick={() => setMobileMenu(false)}
            >
              {/*<ul className='link f_flex uppercase {MobileMenu ? "nav-links-MobileMenu" : "nav-links"} onClick={() => setMobileMenu(false)}'>*/}
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/allproducts">Products</Link>
              </li>
             
              <li>
                <Link to="/contact">contact</Link>
              </li>
             {
              isAdmin &&  <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
             }
              {user?.email ? (
                <div>
                  <li>
                    <Link onClick={handleSignOut}>Logout</Link>
                  </li>
                </div>
              ) : (
                <div className="flex">
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/Register">Register</Link>
                  </li>
                </div>
              )}
            </ul>

            {/* <button
              className="toggle"
              onClick={() => setMobileMenu(!MobileMenu)}
            >
              {MobileMenu ? (
                <i className="fas fa-times close home-btn"></i>
              ) : (
                <i className="fas fa-bars open"></i>
              )}
            </button> */}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
