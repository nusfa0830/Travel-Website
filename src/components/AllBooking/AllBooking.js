import React, { useEffect, useState } from 'react';
import { Table } from "react-bootstrap";



const AllBooking = () => {
    const [booking, setBooking] = useState([]);
    const [isDelete, setIsDelete] = useState(null);



    useEffect(() => {
        fetch(`https://ghostly-beast-76655.herokuapp.com/booking`)
            .then((res) => res.json())
            .then((data) => setBooking(data));
    }, [isDelete]);

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
        <div  >
            <h1> Allbooking {booking?.length}</h1>
            <Table striped bordered hover className="table-responsive table-responsive-sm" >
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
                    <tbody className="px-2" >
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
    );
};

export default AllBooking;