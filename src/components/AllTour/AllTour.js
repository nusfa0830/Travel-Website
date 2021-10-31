import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';

import MenuBar from '../MenuBar/MenuBar';
import Tour from '../Tour/Tour';

const AllTour = () => {

    const [allTour, setAllTour] = useState([]);
    useEffect(() => {
        fetch(`https://ghostly-beast-76655.herokuapp.com/tours`)
            .then(res => res.json())
            .then(data => setAllTour(data))

    }, []);
    // add spinner for bonus mark
    const { user, isLoading } = useAuth();
    if (isLoading === true) {
        return (
            <div className="text-center">
                <Spinner animation="border" variant="danger" />
            </div>
        );
    }
    return (
        <div>
            <div className="pb-5">
                <MenuBar></MenuBar>
            </div>

            <div className="py-5" >

                <div>
                    <h1 className="p-2 ">Most Popular Tours </h1>
                </div>
                <div>
                    <Row xs={1} md={3} className="g-4">
                        {
                            allTour.map(tour => <Tour key={tour.key}
                                tour={tour} id={tour._id} ></Tour>

                            )
                        }
                    </Row>

                </div>


            </div>


            <div>

            </div>




        </div>
    );
};

export default AllTour;