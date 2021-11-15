import axios from 'axios';
import { useEffect, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import BookReviewsItem from './BookReviewItem';
import { apiURL } from '../../constant';

const Home = () => {
    const [booksreview, setBookReview] = useState([]);
    useEffect(() => {
        const fetchData = () => {
            try {
                axios.get(`${apiURL}`)
                    .then(response => {
                        setBookReview(response.data.booksreview);
                    })
                    .catch((err) => console.log(err));
            }
            catch (error) {
                return error;
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            <Container fluid>
                <Row>
                    {booksreview.map((book, index) => {
                        return (
                            <Col key={index} xs={12} lg={2} md={6} sm={6}>
                                <BookReviewsItem
                                    title={book.title}
                                    image={book.image}
                                    idBook={book._id}
                                />
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </div>
    )
}

export default Home;
