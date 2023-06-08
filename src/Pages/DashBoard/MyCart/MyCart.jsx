import React from "react";
import { Helmet } from "react-helmet-async";
import useCart from "../../../Hooks/useCart";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { AiTwotoneDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import "./MyCart.css";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://bistro-boss-server-psi-black.vercel.app/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div className="w-full">
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>

      <div>
        <SectionTitle
          heading={"Wanna Add More"}
          subHeading={"My Cart"}
        ></SectionTitle>
      </div>
      <div className="uppercase flex  items-center justify-evenly ">
        <h3 className="text-2xl">Total items: {cart.length}</h3>
        <h3 className="text-2xl">Total price: {total}</h3>
        <Link to={'/dashboard/payment'}>
        <button className="btn btn-success">Pay</button>
        </Link>
      </div>

      <div className="overflow-x-auto lg:overflow-visible w-full min-h-screen relative  md:px-20 px-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Item Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-ghost text-2xl text-white  bg-red-600"
                  >
                    <AiTwotoneDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <Link
        href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
        rel="stylesheet"
      ></Link>
      <div class="flex items-center justify-center min-h-screen bg-gray-900">
        <div class="col-span-12">
          <div class="overflow-auto lg:overflow-visible ">
            <table class="table text-gray-400 border-separate space-y-6 text-lg">
              <thead class="bg-gray-800 text-gray-500">
                <tr>
                  <th>#</th>
                  <th>Item Image</th>
                  <th>Item Name</th>
                  <th>Price</th>
                  <th>Action</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr class="bg-gray-800" key={item._id}>
                    <td>{index + 1}</td>
                    <td class="p-3">
                      <div class="flex align-items-center">
                        <img
                          class="rounded-full h-12 w-12  object-cover"
                          src={item.image}
                          alt="unsplash image"
                        />
                      </div>
                    </td>
                    <td class="p-3">Technology</td>
                    <td class="p-3 font-bold">200.00$</td>
                     <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-ghost text-2xl text-white  bg-red-600"
                  >
                    <AiTwotoneDelete />
                  </button>
                </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default MyCart;
