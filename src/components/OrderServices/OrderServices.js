import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from 'react-router';
import useFirebase from "../../Hooks/useFirebase";

const OrderServices = () => {
    const { user } = useFirebase();
    const { key } = useParams();
    const [tourDetails, setTourDetails] = useState([]);
    const [isDelete, setIsDelete] = useState(null);

    const [tour, setTour] = useState({});

    // fetching all details
    useEffect(() => {
        fetch(`http://localhost:5000/booking`)
            .then(res => res.json())
            .then(data => setTourDetails(data))

    }, [isDelete]);
    const handleDelete = (id) => {
        console.log(id)
        fetch(`http://localhost:5000/deleteBooking/${id}`, {
            method: "DELETE",
            headers: { "Content-type": "application/json" },
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.deletedCount) {
                    setIsDelete(true);
                } else {
                    setIsDelete(false);
                }
            });
    }

    const handleBuyNow = (index) => {
        const order = tourDetails[index];
        order.email = user.email;


        fetch(`http://localhost:5000/addMyBooking`, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(order),
        })


    }



    return (
        <div>
            <h1>ALL BOOKINGS {tourDetails.length}</h1>
            <div className="all-tourDetails">
                <div className="row container text-center d-flex">
                    {tourDetails.map((pd, index) => (
                        < div >
                            <div className="col-md-8">
                                <div className="border border p-2 m-2">
                                    <img src={pd?.image} className="card-img-top p-2" alt="..." />

                                    <h5>{pd?.name}</h5>
                                    <h5>{pd?.price}</h5>
                                    <h6>{pd?.description}</h6>

                                    <button
                                        onClick={() => handleDelete(pd._id)}
                                        className="btn btn-success m-2"
                                    >
                                        Delete
                                    </button>


                                    <button
                                        onClick={() => handleBuyNow(index)}
                                        className="btn btn-warning m-2"
                                    >
                                        Book now
                                    </button>
                                </div>

                            </div>



                        </div>

                    ))}
                </div>

            </div>
        </div >
    );
};

export default OrderServices;