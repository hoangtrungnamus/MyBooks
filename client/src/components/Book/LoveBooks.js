import { useContext } from 'react';
import { LoveContext } from '../../contexts/LoveContext';
import { Container, Row, Col } from 'react-bootstrap';
import LoveBookItem from './LoveBookItem';

const Love = () => {
    const { loveBooks } = useContext(LoveContext);
    return (
        <Container fluid className="my-2">
            <Row>
                {
                    loveBooks.map((book, index) => {
                        return (
                            <Col key={index} xs={12} sm={6} md={6} lg={2}>
                                <LoveBookItem
                                    title={book.title}
                                    image={book.image}
                                    userId={book.userId}
                                    idBook={book._id}
                                />
                            </Col>
                        )
                    })

                }
            </Row>
        </Container>
    )
}

export default Love;
