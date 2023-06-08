import React from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import { Helmet } from "react-helmet-async";
import { AiTwotoneDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageItem = () => {
  const [menu, , refetch] = useMenu();
  const [axiosSecure] = useAxiosSecure();

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
        axiosSecure.delete(`/menu/${item._id}`).then((res) => {
          console.log(res.data);
          console.log("delete res", res.data);
          if (res.data.deletedCount > 0) {
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
        <title>Bistro Boss | Manage Items</title>
      </Helmet>
      <SectionTitle
        heading={"Manage All Items "}
        subHeading={"Hurry Up"}
      ></SectionTitle>

      <div className="uppercase flex  items-center justify-evenly ">
        <h3 className="text-2xl">Total items: {menu.length}</h3>
      </div>

      <div className="overflow-x-auto lg:overflow-visible w-full min-h-screen relative  md:px-20 px-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Item Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, index) => (
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
                <td>
                  <button
                    // onClick={() => handleUpdate(item)}
                    className="btn btn-ghost text-2xl text-white  bg-yellow-600"
                  >
                    <BiEdit />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItem;
