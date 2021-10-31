import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import "./Tour.css";

const Tour = (props) => {
    const { key, name, image, description, price, day, person, place, _id } = props.tour;


    return (
        <div>

            <div>
                <div>
                    <div className="">
                        <div className="col pb-5 m-2">
                            <div class="shadow-lg rounded h-100">
                                <img src={image} className="card-img-top p-2" alt="..." />
                                <div class="">
                                    <h3 className="card-title px-2">{name}</h3>
                                    <h6 className="text-info">{place}</h6>
                                </div>
                                <div>
                                    <h6 className="text-muted" > $ {price} /per person</h6>

                                </div>
                                <div className="star-icon pb-2">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                                <div class="pb-2 d-flex justify-content-center ">
                                    <Link to={`/alltour/${_id}`} className="px-3" >    <Button className="btn-success   ">Booking Now</Button>
                                    </Link>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>




        </div>
    );
};

export default Tour;