import React, { useEffect, useState } from 'react';
import { Table } from "react-bootstrap";



const AllBooking = () => {
    const [booking, setBooking] = useState([]);
    const [isDelete, setIsDelete] = useState(null);



    useEffect(() => {
        fetch("http://localhost:5000/booking")
            .then((res) => res.json())
            .then((data) => setBooking(data));
    }, [isDelete]);

    const handleDelete = (id) => {

        fetch(`http://localhost:5000/deleteBooking/${id}`, {
            method: "DELETE",
            headers: { "Content-type": "application/json" },
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.deletedCount) {
                    setIsDelete(true);
                    alert("DO YOU Want to Delete?");
                } else {
                    setIsDelete(false);
                }
            });
    }



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
                        <th>Action</th>
                    </tr>
                </thead>
                {booking?.map((pd, index) => (
                    <tbody>
                        <tr>
                            <td>{index}</td>
                            <td>{pd?.name}</td>
                            <td>{pd?.place}</td>

                            <td>{pd?.day}</td>
                            <td>{pd?.person}</td>
                            <td>${pd?.price}</td>
                            <button onClick={() => handleDelete(pd._id, index)} className="btn bg-danger p-2">Delete</button>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default AllBooking;