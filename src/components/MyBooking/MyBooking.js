import React, { useEffect, useState } from 'react';
import useFirebase from '../../Hooks/useFirebase';

const MyBooking = () => {
    const { user } = useFirebase();
    const email = user.email;
    const [booking, setBooking] = useState();
    useEffect(() => {
        fetch(`http://localhost:5000/mybooking/${email}`)
            .then((res) => res.json())
            .then(data => setBooking(data))
    }, [email])



    return (
        <div>
            <h1>MY Booking :{booking.length} </h1>
            <div className="all-products">
                <div className="row container text-center">
                    {booking?.map((pd, index) => (


                        <div className="col-md-3 col-lg-4 col-1">
                            <div className=" border border p-2 m-2">

                                <h5>{pd?.place}</h5>
                                <h5>{pd?.name}</h5>

                                <h5>${pd?.price}/per person</h5>

                                <button className="btn btn-danger m-2">delete</button>
                            </div>
                        </div>



                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyBooking;