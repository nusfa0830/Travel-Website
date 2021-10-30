import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./AdminDashBoard.css";
import AddEvents from '../AddEvent/AddEvent';
import AllBooking from '../AllBooking/AllBooking';
import ManageBooking from '../ManageBooking/ManageBooking';
import MyBooking from '../MyBooking/MyBooking';

const AdminDashBoard = () => {
    const [control, setControl] = useState("allBooking");

    console.log(control);
    return (
        <div className="admin-container">
            <div className="dashboard">
                <div className="admin-box">
                    <div className="row admin-container">
                        <div className="col-md-3 ">
                            <div className="admin-area p-1">
                                <h6>Dashboard</h6>
                                <div className="all-menu mt-5  ">
                                    <li
                                        onClick={() => setControl("allBooking")}
                                        className="admin-menu p-2"
                                    >
                                        Manage  All Bookings
                                    </li>
                                    <li
                                        onClick={() => setControl("addEvents")}
                                        className="admin-menu p-2"
                                    >
                                        Add Events
                                    </li>
                                    <li
                                        onClick={() => setControl("manageBooking")}
                                        className="admin-menu p-2"
                                    >
                                        Manage Events
                                    </li>
                                    <li onClick={() => setControl("myCart")}

                                        className="admin-menu p-2"
                                    >
                                        My Cart
                                    </li>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 text-center  text-center">
                            {control === "allBooking" && <AllBooking></AllBooking>}
                            {control === "manageBooking" && <ManageBooking></ManageBooking>}
                            {control === "addEvents" && <AddEvents></AddEvents>}
                            {control === "myCart" && <MyBooking></MyBooking>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashBoard;