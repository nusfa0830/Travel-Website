import React, { useEffect, useState } from 'react';
import { Table } from "react-bootstrap";



const AllBooking = () => {
    const [booking, setBooking] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/addTour`)
            .then((res) => res.json())
            .then((data) => setBooking(data));
    }, []);

    // const handleDelete = (id) => {

    //     fetch(`http://localhost:5000/deleteBooking/${id}`, {
    //         method: "DELETE",
    //         headers: { "Content-type": "application/json" },
    //     })
    //         .then((res) => res.json())
    //         .then((result) => {
    //             if (result.deletedCount) {
    //                 alert("DO YOU Want to Delete?");
    //                 setIsDelete(true);

    //             } else {
    //                 setIsDelete(false);
    //             }
    //         });
    // }



    return (
        <div>
            <h1> Allbooking {booking?.length}</h1>
            <Table striped bordered hover  >
                <thead>
                    <tr>
                        <th>No</th>

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
    );
};

export default AllBooking;