import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import { Button, Nav } from 'react-bootstrap';
import MenuBar from '../MenuBar/MenuBar';

const TourDetails = () => {

    const { key } = useParams();
    const [tourDetails, setTourDetails] = useState([]);

    const [tour, setTour] = useState({});

    // fetching all details
    useEffect(() => {
        fetch(`http://localhost:5000/tours`)
            .then(res => res.json())
            .then(data => setTourDetails(data))

    }, []);

    // use map for set single data
    useEffect(() => {
        tourDetails.map(tour => {
            if (tour.key === parseInt(key)) {
                setTour(tour);
            }
        })
    }, [tourDetails])


    const onSubmit = (data) => {

        fetch(`http://localhost:5000/addtour`, {
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
                    <div class="col  pb-5">
                        <div class="shadow-lg card h-100">
                            <img src={tour.image}
                                className="card-img-top p-2" alt="..." />

                            <div>
                                <h1 class="card-title">  {tour.name}</h1>
                                <h6 class="text-dark">{tour.description}</h6>
                                <h3 class="text-info"> Place : {tour.place}</h3>
                                <h4 class="text-dark">People:  {tour.person} people</h4>

                                <h4 class="text-dark">Duration : {tour.day} days</h4>  <h2 class="text-muted">
                                    Price :$ {tour.price}/per person </h2>
                                <div>
                                    <Nav.Link as={NavLink} to={`/tour/${key}`} >


                                        <Button variant="danger" onClick={() => onSubmit(tour, key)}    >

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