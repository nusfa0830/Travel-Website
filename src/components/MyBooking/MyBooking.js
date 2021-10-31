import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useFirebase from '../../Hooks/useFirebase';

const MyBooking = () => {
    const { user } = useFirebase();
    const email = user.email;
    const [booking, setBooking] = useState();
    useEffect(() => {
        fetch(`http://localhost:5000/mybooking/${email}`)
            .then((res) => res.json())
            .then(data => setBooking(data))
    }, [email, booking]);


    return (
        <div>
            <h1>MY Booking  </h1>
            <div className="all-products">
                <div className="row container text-center">
                    <Table striped bordered hover  >
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>User</th>
                                <th>Name</th>
                                <th>Place</th>
                                <th>Day </th>

                                <th>Price</th>

                            </tr>
                        </thead>
                        {booking?.map((pd, index) => (

                            <tbody className="" >
                                <tr>
                                    <td>{index}</td>
                                    <td>{pd?.email}</td>
                                    <td>{pd?.name}</td>

                                    <td>{pd?.place}</td>

                                    <td>{pd?.day}</td>

                                    <td>${pd?.price}</td>

                                </tr>
                            </tbody>







                        ))}
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default MyBooking;