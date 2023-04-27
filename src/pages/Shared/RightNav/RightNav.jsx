import React from 'react';
import { Button } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <div className='d-grid'>
                <h4 className='fw-bold mb-3'>Login With</h4>
                <Button className='mb-2' variant="outline-primary"> <FaGoogle className='fs-5' /> Login with Google</Button>
                <Button variant="outline-secondary"> <FaGithub className='fs-5' /> Login with Github</Button>
            </div>

            <div className='mt-5 d-grid'>
                <h4 className='fw-bold mb-3'>Find Us On</h4>
                <Button className='mb-2' variant="outline-primary"> <FaFacebookF className='fs-5' /> Facebook</Button>
                <Button className='mb-2' variant="outline-info"> <FaTwitter className='fs-5' /> Twitter</Button>
                <Button variant="outline-secondary"> <FaInstagram className='fs-5' /> Instagram</Button>
            </div>

            <QZone></QZone>

            <div className="bg-image p-5 text-center shadow-1-strong mt-3 text-white " style={{ backgroundImage: `url(${bg})` }}>
                <h3 className="mb-3 fw-bold">Create an Amazing Newspaper</h3>
                <p>
                    Discover thousands of options, easy to customize layouts, one-click to import demo and much more.
                </p>

                <button className='bg-danger border border-0 p-2 text-white'>Learn More</button>
            </div>

        </div>
    );
};

export default RightNav;