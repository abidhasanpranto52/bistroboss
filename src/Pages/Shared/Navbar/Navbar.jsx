import { Link } from "react-router-dom";
import "./Nav.css";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { AiOutlineShoppingCart } from "react-icons/ai";
import useCart from "../../../Hooks/useCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="navbar fixed  z-10 opacity-70 max-w-screen-xl mx-auto text-black  bg-base-200">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact text-black dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <a>Contact</a>
              </li>
              <li>
                <Link to={"/dashboard/user"}>DashBoard</Link>
              </li>
              <li>
                <Link to={"/menu"}>Menu</Link>
              </li>
              <li>
                <Link to={"/shop"}>Shop</Link>
              </li>
              {user ? (
                <>
                  <button className="btn btn-ghost">LogOut</button>
                </>
              ) : (
                <li>
                  <Link to={"/login"}>Sign Out</Link>
                </li>
              )}
            </ul>
          </div>
          <a className="btn  btn-ghost text-lg">
            Bistro Boss <br /> Restaurant
          </a>
        </div>
        <div className="navbar-center hidden lg:flex navs">
          <ul className="menu menu-horizontal px-1 font-semibold">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
            {user ? (
              <ul>
                <li>
                  <Link to={"/dashboard/user"}>DashBoard</Link>
                </li>
              </ul>
            ) : (
              <></>
            )}
            <li>
              <Link to={"/menu"}>Our Menu</Link>
            </li>
            <li>
              <Link to={"/shop/salad"}>Our Shop</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <Link to={"/dashboard/mycart"}>
                <button className="btn">
                  <AiOutlineShoppingCart className="mr-2" />
                  <div className="badge badge-secondary">+ {cart?.length}</div>
                </button>
              </Link>

              <button onClick={handleLogOut} className="btn btn-ghost">
                LogOut
              </button>
            </>
          ) : (
            <ul>
              <li>
                <Link to={"/login"} className="btn btn-info">
                  Log In
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
