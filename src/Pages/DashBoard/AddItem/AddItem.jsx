import React from "react";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_token = import.meta.env.VITE_image_token;

const AddItem = () => {
    const [axiosSecure] = useAxiosSecure();
  const {    register,    handleSubmit, reset } = useForm();
//   console.log(errors);
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_token}`
  const onSubmit = (data) => {

    const formData = new FormData();
    formData.append('image', data.image[0])

    fetch(img_hosting_url,{
        method:    'POST',
        body:formData
    })
    .then(res => res.json())
    .then(imgResponse => {
        console.log(imgResponse);
        if (imgResponse.success) {
            const imgURL = imgResponse.data.display_url;
            const {name, category, price, recipe } = data;
           const  newItem = {name, category, price: parseFloat(price), recipe, image: imgURL };
            console.log(newItem);
            axiosSecure.post('/menu', newItem)
            .then(data =>{
                console.log('new data',data.data);
                if (data.data.insertedId) {
                    reset();
                    Swal.fire({
                        position: 'top-middle',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
    })
    console.log(data)
};
// console.log(img_token);


  return (
    <div className="w-full p-4">
      <Helmet>
        <title>Bistro Boss | Add Item</title>
      </Helmet>

      <SectionTitle
        heading={"Add An Item"}
        subHeading={"Wanna Add More"}
      ></SectionTitle>

      <form className="border p-7 bg-gray-100 rounded-md" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe Name*</span>
                    </label>
                    <input type="text" placeholder="Recipe Name"
                        {...register("name", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>
                <div className="flex my-4">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Category*</span>
                        </label>
                        <select defaultValue="Pick One" {...register("category", { required: true })} className="select select-bordered">
                            <option disabled>Pick One</option>
                            <option>pizza</option>
                            <option>soup</option>
                            <option>salad</option>
                            <option>dessert</option>
                            <option>drinks</option>
                        </select>
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Price*</span>
                        </label>
                        <input type="number" {...register("price", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Recipe Details</span>
                    </label>
                    <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                </div>
                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text">Item Image*</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                </div>
                <input className="btn btn-sm mt-4 btn-warning" type="submit" value="Add Item "/>
            </form>
    </div>
  );
};

export default AddItem;
