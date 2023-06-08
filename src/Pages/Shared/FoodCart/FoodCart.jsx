import React, { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../Hooks/useCart";

const FoodCart = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [ , refetch] = useCart();

  const handleCart = item =>{
    console.log(item);
    if (user && user.email) {
      const cartItem = {menuItemId: _id, name, image, price, email: user.email}
      fetch('https://bistro-boss-server-psi-black.vercel.app/carts' , {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(cartItem)
      })
      .then(res => res.json())
      .then(data =>{
        refetch();
        if (data.insertedId) {
          Swal.fire(
            'Good job!',
            'Food added on The Cart!',
            'success'
          )
        }
      })
    }
    else{
      Swal.fire({
        title: 'Please Log In to Order The Food',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'LogIn Now!'
      }).then((result) => {
        if (result.isConfirmed) {
         navigate('/login', {state: {from:location}})
        }
      })
    }
  }
  return (
    <div className="card w-80 h-[450px] my-5 border-b-2 border-t-2 border-red-800 shadow-xl">
      <figure >
        <img className="w-full" src={image} alt={name} />
      </figure>
          <p className="font-bold absolute right-0 mr-2 bg-black p-1
           rounded-md text-yellow-600 mt-2 ">Price: $ {price}</p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title text-2xl font-bold">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button onClick={() => handleCart(item)} className="btn  btn-outline border-1 item-center border-b-4 mt-4">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCart;
