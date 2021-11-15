import { useState, useEffect } from 'react';
import axios from 'axios';
import BookItem from './BookItem'
import { Container, Row, Col } from 'react-bootstrap';
import { apiURL } from '../../constant';
const MyBooks = () => {
    const [responseData, setResponseData] = useState([]);
    useEffect(() => {
        const fetchData = () => {
            try {
                axios.get(`${apiURL}/books/${localStorage.getItem('userId')}`)
                    .then((response) => {
                        setResponseData(response.data.books);
                    })
                    .catch((err) => console.log(err))
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    }, []);

    return (
        <div>
            <Container fluid >
                <Row>
                    {responseData.map((response, index) => {
                        // xs < 768, 768 < sm < 992, 992 < md < 1200, lg > 1200
                        return (
                            <Col key={index} xs={12} lg={2} md={6} sm={6}>
                                <BookItem key={index} title={response.title} image={response.image} id={response._id}></BookItem>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </div>
    )
}

export default MyBooks;
