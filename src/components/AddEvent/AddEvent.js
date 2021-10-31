
import React from "react";
import { useForm } from "react-hook-form";
import useFirebase from "../../Hooks/useFirebase";
import Footer from "../Footer/Footer";
import MenuBar from "../MenuBar/MenuBar";

const AddBooking = () => {
    const { user } = useFirebase();

    const {
        register,
        handleSubmit,
        watch,

        formState: { errors },
    } = useForm();


    const onSubmit = (data) => {
        data.email = user.email;
        console.log(data);
        fetch(`https://ghostly-beast-76655.herokuapp.com/addtour`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));

    };




    return (
        <div className="pb-5" >
            <div className="pb-5"><MenuBar></MenuBar></div>

            <h1 className="mt-5 text-center text-dark">Please Add Booking</h1>
            <div className="login-box w-25 m-auto mt-5 pb-4 ">
                <div className="event-box border border d-flex justify-content-center align-items-center">
                    <div className="login-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                {...register("email")}
                                placeholder="Email"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input
                                {...register("name")}
                                placeholder="name"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input
                                {...register("place")}
                                placeholder="Place"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input
                                {...register("person")}
                                placeholder="person"
                                type="number"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input
                                {...register("day")}
                                placeholder="day"
                                type="number"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input
                                {...register("price")}
                                placeholder="price"
                                type="number"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input
                                {...register("description")}
                                placeholder="Description"

                                className="p-2 m-2 w-100"
                            />
                            <br />

                            <input
                                {...register("image", { required: true })}
                                placeholder="Image Link"

                                className="p-2 m-2 w-100"
                            />
                            <br />

                            <br />

                            {errors.exampleRequired && <span>This field is required</span>}

                            <input type="submit" value="Add" className="btn btn-info w-50 " />
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};


export default AddBooking;