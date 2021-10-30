import React from 'react';
import './Bannar.css';

const Bannar = () => {
    return (
        <div className="pt-5" >

            <div className="body-name pt-5 mx-5">
                <h1 className="star-icon" >Go Exotic Places
                </h1>  <hr></hr> <p className="text-dark">When it comes to exploring exotic places, the choices are numerous. Whether you like peaceful destinations or vibrant landscapes, we have offers for you.</p>
            </div>
            <div>
                <div className="container ">
                    <div className="row bg-gradient rounded p-2">
                        <div className="col-md-4 px-2 china ">
                            <img className="images"
                                alt=""
                                src={"https://image.freepik.com/free-photo/china-arch_1127-3673.jpg"}

                            />
                            <h4 className="p-2 text-info">China</h4>
                        </div>
                        <div className="col-md-4 px-2 ">
                            <img className="images border "
                                alt=""
                                src={"https://image.freepik.com/free-photo/beautiful-girl-standing-viewpoint-koh-nangyuan-island-near-koh-tao-island-surat-thani-thailand_335224-1094.jpg"}

                            />
                            <h4 className="p-2 ">Maldives</h4>
                        </div>
                        <div className="col-md-4 px-2  ">
                            <img className="images border "
                                alt=""
                                src={"https://image.freepik.com/free-photo/dubai-night-dubai-city-night-landscape_158388-2468.jpg"}

                            />
                            <h4 className=" text-info" >Dubai  </h4>
                        </div>
                    </div></div></div></div>
    );
};

export default Bannar;