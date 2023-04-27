import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import first from '../../../assets/1.png';
import second from '../../../assets/2.png';
import third from '../../../assets/3.png';
import moment from 'moment';
import { FaRegCalendar } from 'react-icons/fa';

const EditorsInsights = () => {
    return (
        <div className='mt-5'>
            <h2 className='mb-3'>Editors Insight</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={first} />
                        <Card.Body>
                            <Card.Title className='fw-bold'>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                            <p className='fw-bold text-secondary'> <FaRegCalendar className='fs-5 text me-2'></FaRegCalendar>  {moment().format("MMMM D, YYYY")}</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={second} />
                        <Card.Body>
                            <Card.Title className='fw-bold'>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                            <p className='fw-bold text-secondary'> <FaRegCalendar className='fs-5 text me-2'></FaRegCalendar>  {moment().format("MMMM D, YYYY")}</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={third} />
                        <Card.Body>
                            <Card.Title className='fw-bold'>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                            <p className='fw-bold text-secondary'> <FaRegCalendar className='fs-5 text me-2'></FaRegCalendar>  {moment().format("MMMM D, YYYY")}</p>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </div>
    );
};

export default EditorsInsights;