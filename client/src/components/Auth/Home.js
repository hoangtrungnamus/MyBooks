import axios from 'axios';
import { useEffect, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import BookReviewsItem from './BookReviewItem';

const Home = (props) => {
    const [booksreview, setBookReview] = useState([]);
    useEffect(() => {
        const fetchData = () => {
            try {
                axios.get(`http://localhost:4000`)
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
            <Container fluid className="my-2">
                <Row>
                    {booksreview.map((book, index) => {
                        return (
                            <Col key={index} sm={12} md={4} xs={12} lg={2}>
                                <BookReviewsItem
                                    title={book.title}
                                    image={book.image}
                                />
                            </Col>
                        );
                    })}
                </Row>
            </Container>
    )
}

export default Home;
