import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageBooking = () => {

    const [event, setEvent] = useState([]);

    const [control, setConrol] = useState(false);


    useEffect(() => {
        fetch(`https://ghostly-beast-76655.herokuapp.com/booking`)
            .then((res) => res.json())
            .then((data) => setEvent(data));
    }, [control]);
    // delete handel 
    const handleDelete = (id) => {
        console.log(id)

        fetch(`https://ghostly-beast-76655.herokuapp.com/${id}`, {
            method: "DELETE",
            headers: { "content-type": "application/json" },

        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    setConrol(!control);
                    alert('Do You Want to Delete?');
                } else {
                    setConrol(false);
                }
            });

    };






    return (
        <div className="container">
            <h1> All Booking {event?.length}</h1>
            <Table striped bordered hover className="table-responsive">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>User Email</th>

                        <th>Booked Place </th>


                        <th>Image Link</th>

                        <th>Action</th>
                    </tr>
                </thead>
                {event?.map((pd, index) => (
                    <tbody>
                        <tr>
                            <td>{index}</td>
                            <td>{pd?.email}</td>
                            <td>{pd?.place}</td>
                            <td>{pd?.image}</td>

                            <button
                                onClick={() => handleDelete(pd._id)}
                                className="btn bg-danger p-2 alert alert-primary" role="alert"
                            >
                                Delete
                            </button>

                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default ManageBooking;