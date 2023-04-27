import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container} from 'react-bootstrap';
import Marquee from "react-fast-marquee";



const Header = () => {

    return (
        <Container>
            <div className="text-center mt-5">
                <img src={logo} alt="" />
                <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                <p className='fw-bold'>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>

            <div className='d-flex bg-light mb-3 p-2 '>
                <Button variant="danger">Latest</Button>
                <Marquee pauseOnHover speed={90} >
                    <span className='fw-bold m-1 text-danger'> Match Highlights: </span> Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Marquee>
            </div>

           
        </Container>
    );
};

export default Header;