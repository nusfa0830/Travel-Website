import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./AdminDashBoard.css";

import AllBooking from '../AllBooking/AllBooking';
import ManageBooking from '../ManageBooking/ManageBooking';
import AddBooking from '../AddEvent/AddEvent';
import MenuBar from '../MenuBar/MenuBar';

const AdminDashBoard = () => {
    const [control, setControl] = useState("allBooking");

    console.log(control);
    return (<div>
        <div className="pb-5" > <MenuBar></MenuBar> </div>
        <div className="admin-container pt-4">

            <div className="dashboard">
                <div className="admin-box">
                    <div className="row admin-container">
                        <div className="col-md-3 ">
                            <div className="admin-area p-1">
                                <h6>Dashboard</h6>
                                <div className="all-menu mt-5  ">
                                    <li
                                        onClick={() => setControl("addBooking")}
                                        className="admin-menu p-2"
                                    >
                                        Add Booking
                                    </li>
                                    <li
                                        onClick={() => setControl("allBooking")}
                                        className="admin-menu p-2"
                                    >
                                        All Bookings
                                    </li>

                                    <li
                                        onClick={() => setControl("manageBooking")}
                                        className="admin-menu p-2"
                                    >
                                        Manage Booking
                                    </li>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 text-center  text-center">{control === "addBooking" && <AddBooking></AddBooking>}
                            {control === "allBooking" && <AllBooking></AllBooking>}
                            {control === "manageBooking" && <ManageBooking></ManageBooking>}

                        </div>
                    </div>
                </div>
            </div>
        </div>  </div>
    );
};

export default AdminDashBoard;