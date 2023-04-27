import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaRegBookmark, FaShareAlt, FaEye, FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { _id, title, details, image_url, author, total_view, rating } = news
    return (
        <Card className="mb-4">
            <Card.Header className='d-flex align-items-center'>
                <Image style={{ height: "40px" }} src={author?.img} roundedCircle />
                <div className='ps-3 flex-grow-1'>
                    <p className='mb-0 fw-bold'>{author?.name}</p>
                    <p><small> {moment(author?.published_date).format('yyyy-MM-D')}</small></p>
                </div>
                <div className='fs-4 text'>
                    <FaRegBookmark className='me-2'></FaRegBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title className='fw-bold'>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {details.length < 250 ? <>{details}</> :
                        <>{details.slice(0, 250)}... <Link className='text-decoration-none text-danger fw-bold' to={`/news/${_id}`}>Read More</Link> </>
                    }
                </Card.Text>

            </Card.Body>
            <Card.Footer className="text-muted d-flex">
                <div className='flex-grow-1'>
                    <Rating
                        placeholderRating={rating.number}
                        readonly
                        emptySymbol={<FaRegStar className='text-danger'></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-danger'></FaStar>}
                        fullSymbol={<FaStar className='text-danger'></FaStar>}
                    />
                    <span className='ms-1'>{rating?.number}</span>
                </div>
                <div>
                    <FaEye></FaEye> {total_view}
                </div>
            </Card.Footer>

        </Card>
    );
};

export default NewsCard;