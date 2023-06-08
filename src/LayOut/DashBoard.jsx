import { Helmet } from "react-helmet-async";
import { AiFillMessage, AiOutlineMenuUnfold, AiOutlineShoppingCart, AiTwotoneShopping } from "react-icons/ai";
import { FaWallet, FaCalendarAlt, FaHome, FaUtensils, FaUsers } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";

const DashBoard = () => {
    const [cart] = useCart();

    //TODO: load data from the server to have dynamic isAdmin based on data
    // const isAdmin = true;

    const [isAdmin] = useAdmin();
    // console.log(isAdmin);

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Dashboard</title>
            </Helmet>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                        Open drawer
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-yellow-500 font-bold">
                        {/* Sidebar content here */}

                        {isAdmin ? (
                            <>
                                <li>
                                    <Link to={"adminHome"}>
                                        <FaHome />
                                        Admin Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"addItem"}>
                                        <FaUtensils />
                                        Add An Items
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/dashboard/manageItems"}>
                                        <FaWallet />
                                        Manage Items
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/dashboard/mycart"}>
                                        <AiOutlineShoppingCart />
                                        Manage Bookings
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/dashboard/users"}>
                                        <FaUsers />
                                        All Users
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link to={"user"}>
                                        <FaHome />
                                        User Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"reserve"}>
                                        <FaCalendarAlt />
                                        Reservations
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/dashboard/payment"}>
                                        <FaWallet />
                                        PayMent
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/dashboard/mycart"}>
                                        <AiOutlineShoppingCart />
                                        My Cart <span className="badge badge-secondary ">+{cart.length || 0}</span>
                                    </Link>
                                </li>
                            </>
                        )}
                        <div className="divider"></div>
                        <li>
                            <Link to={"/"}>
                                <FaHome />
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to={"/menu"}>
                                <AiOutlineMenuUnfold />
                                Menu
                            </Link>
                        </li>
                        <li>
                            <Link to={"/shop/salad"}>
                                <AiTwotoneShopping /> Shop
                            </Link>
                        </li>
                        <li>
                            <Link to={""}>
                                <AiFillMessage />
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default DashBoard;
