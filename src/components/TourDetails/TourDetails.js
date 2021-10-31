import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import { Button, Nav } from 'react-bootstrap';
import MenuBar from '../MenuBar/MenuBar';

const TourDetails = () => {

    const { _id } = useParams();
    const [tourDetails, setTourDetails] = useState([]);

    const [tour, setTour] = useState({});

    // fetching all details
    useEffect(() => {
        fetch(`https://ghostly-beast-76655.herokuapp.com/tours`)
            .then(res => res.json())
            .then(data => setTourDetails(data))

    }, []);

    // use map for set single data
    useEffect(() => {
        tourDetails.map(tour => {
            if (tour._id === _id) {
                setTour(tour);
            }
        })
    }, [tourDetails])


    const onSubmit = (data) => {

        fetch(`https://ghostly-beast-76655.herokuapp.com/addtour/${_id}`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));


    };



    return (
        <div>
            <div className="p-5">
                <MenuBar></MenuBar>
            </div>
            <div className="container ">

                <div className="row row-cols-1 row-cols-md-1 g-4 p-2">
                    <div className="col  pb-5">
                        <div className="shadow-lg card h-100">
                            <img src={tour.image}
                                className="card-img-top p-2" alt="..." />

                            <div>
                                <h1 className="card-title">  {tour.name}</h1>
                                <h6 className="text-dark">{tour.description}</h6>
                                <h3 className="text-info"> Place : {tour.place}</h3>
                                <h4 className="text-dark">People:  {tour.person} people</h4>

                                <h4 className="text-dark">Duration : {tour.day} days</h4>  <h2 className="text-muted">
                                    Price :$ {tour.price}/per person </h2>
                                <div>
                                    <Nav.Link as={NavLink} to={`/tour/${_id}`} >


                                        <Button variant="danger" onClick={() => onSubmit(tour)}    >

                                            BOOK NOW
                                        </Button>

                                    </Nav.Link>  </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default TourDetails;