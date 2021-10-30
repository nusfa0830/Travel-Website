import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageBooking = () => {

    const [event, setEvent] = useState([]);

    const [control, setConrol] = useState(false);


    useEffect(() => {
        fetch("http://localhost:5000/addTour")
            .then((res) => res.json())
            .then((data) => setEvent(data));
    }, [control]);

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/addTour/${id}`, {
            method: "DELETE",
            headers: { "content-type": "application/json" },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    setConrol(!control);
                    alert("DO YOU Want to Delete?");
                } else {
                    setConrol(false);
                }
            });
        console.log(id);
    };






    return (
        <div className="container">
            <h1> All Booking {event?.length}</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>BookED PlACE </th>
                        <th>Places description</th>
                        <th>Image Link</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {event?.map((pd, index) => (
                    <tbody>
                        <tr>
                            <td>{index}</td>
                            <td>{pd.place}</td>
                            <td>{pd.description}</td>
                            <td>{pd.image}</td>
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