import { useContext, useEffect } from 'react';
import { LoveContext } from '../../contexts/LoveContext';
import { AuthContext } from '../../contexts/AuthContext';
import { Container, Row, Col } from 'react-bootstrap';
import LoveBookItem from './LoveBookItem';
import { apiURL } from '../../constant';
import axios from 'axios';



const Love = () => {
    const { isAuthenticated } = useContext(AuthContext);
    const { setCount, setLoveBooks, loveBooks } = useContext(LoveContext);
    

    useEffect(() => {
        const getLoveBooks = () => {
            try {
                if (isAuthenticated) {
                    axios.get(`${apiURL}/books/love`)
                    .then(res => {setCount(res.data.lovebooks.length); setLoveBooks(res.data.lovebooks)})
                    .catch(err=>console.log(err))
                }
            } catch (error) {
                return error;
            }
        }
        getLoveBooks();
    }, [setLoveBooks, setCount, isAuthenticated]);

    return (
        <Container fluid>
            <Row>
                {
                    loveBooks.map((book, index) => {
                        return (
                            <Col key={index} xs={12} sm={6} md={6} lg={2}>
                                <LoveBookItem
                                    title={book.title}
                                    image={book.image}
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
