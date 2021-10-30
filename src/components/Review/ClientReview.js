import React from 'react';
import img1 from "../../images/user-1.png";
import img2 from "../../images/user-2.png";
import img3 from "../../images/user-3.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';





const ClientReview = () => {
    return (
        <div className="py-4" >
            <div className="text-center p-5">
                <h1>Our Top Reviews
                </h1>
            </div>
            {/* <!-------- happy-client-column---------> */}
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

                <div className="col">
                    <div className="card shadow-lg  border-0 h-100">
                        <div className=" d-flex justify-content-center p-2 ">
                            <img alt="" style={{
                                width: " 149px",
                                height: "149px"
                            }} src={img1} />

                        </div>
                        <div className="p-4" >
                            <p className="card-text"> Tripo the team were very fast and efficient in responding to any emails and also with updating me with my travel itinerary, etc. Loved being able yo book everything in the one place, in one transaction. I will most definitely be using Travel Online for my holiday bookings again in the future!</p>
                            {/* <!--------- rating star  ---------> */}
                            <div className=" d-flex justify-content-center " >
                                <div className="star-icon pb-2">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>

                            </div>
                            <div>

                            </div>
                        </div>
                        <div className="text-center">
                            <h6> <span className="text-primary" />John Miles </h6>
                        </div>
                        <div className="d-flex justify-content-center">
                            <h6>  Banker </h6>
                        </div>

                    </div>
                </div>
                <div className="col">
                    <div className="card shadow-lg  border-0 h-100">
                        <div className=" d-flex justify-content-center  p-2 ">
                            <img alt="" style={{
                                width: " 149px",
                                height: "149px"
                            }} src={img2} />
                        </div>
                        <div className="p-4" >
                            <p className="card-text">I found your service very good in the holiday acquisition process but lacking in the quality of the accommodation..</p>
                            {/* <!--------- rating star  ---------> */}
                            <div className=" d-flex justify-content-center " >
                                <div className="star-icon pb-2">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                            </div>
                            <div>

                            </div>
                        </div>
                        <div className="text-center">
                            <h6> <span className="text-primary" /> Taylor Swift </h6>
                        </div>
                        <div className="text-center">
                            <h6> Banker  </h6>
                        </div>

                    </div>
                </div>
                <div className="col">
                    <div className="card shadow-lg  border-0 h-100">
                        <div className=" d-flex justify-content-center r p-2">
                            <img alt="" style={{
                                width: " 149px",
                                height: "149px"
                            }} src={img3} />

                        </div>
                        <div className="p-4" >
                            <p className="card-text">Our booking was very easy to do online, I needed to make a few changes that I felt was not handled well at all.
                                Once I spoke to the Team Manager, he was absolutely amazing. Couldn't do enough to sort our issue out. Went way above a 5 star service. More then happy to use snd recommend this company</p>
                            {/* <!--------- rating star  ---------> */}
                            <div className=" d-flex justify-content-center " >
                                <div className="star-icon pb-2">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                            </div>
                            <div>

                            </div>
                        </div>
                        <div className="text-center">
                            <h6> <span className="text-primary" /> Regina Miles </h6>
                        </div>
                        <div className="text-center">
                            <h6> Student </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientReview;