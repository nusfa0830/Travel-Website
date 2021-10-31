import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useFirebase from '../../Hooks/useFirebase';
import MenuBar from '../MenuBar/MenuBar';

const MyBooking = () => {
    const { user } = useFirebase();
    const email = user.email;
    const [booking, setBooking] = useState();
    useEffect(() => {
        fetch(`https://ghostly-beast-76655.herokuapp.com/mybooking/${email}`)
            .then((res) => res.json())
            .then(data => setBooking(data))
    }, [email, booking])



    return (

        <div>
            <div className="pb-5"  ><MenuBar></MenuBar></div>
            <div className="pt-5 px-5" >
                <h1> </h1>
                <div className="all-products">
                    <div className="row container text-center">
                        <Table striped bordered hover className="table-responsive table-responsive-sm"  >
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>User</th>
                                    <th>Name</th>
                                    <th>Place</th>
                                    <th>Day </th>
                                    <th>Person</th>
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
                                        <td>{pd?.person}</td>
                                        <td>${pd?.price}</td>

                                    </tr>
                                </tbody>







                            ))}
                        </Table>
                    </div>
                </div>
            </div></div>
    );
};

export default MyBooking;