import { AuthContext } from '../../contexts/AuthContext';
import { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import BookItem from './BookItem'
import { Container, Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Dashboard = () => {
    const [responseData, setResponseData] = useState([]);
    const { userId, setUserId } = useContext(AuthContext);

    const history = useHistory();
    useEffect(() => {
        const fetchData = () => {
            if (!localStorage.getItem('userId')) {
                history.push('/login');
            }
            else {
                if (userId.length > 0) {
                    localStorage.setItem('userId', userId);
                }
                try {
                    axios.get(`http://localhost:4000/books/${localStorage.getItem('userId')}`)
                        .then((response) => {
                            setResponseData(response.data.books)
                        })
                        .catch((err) => console.log(err))
                } catch (error) {
                    console.log(error);
                }
            }
        }
        fetchData()
    }, [userId, history, setUserId]);

    return (
        <div>
            <Container className="my-4" fluid >
                <Row>
                    {responseData.map((response, index) => {
                        // xs < 768, 768 < sm < 992, 992 < md < 1200, lg > 1200
                        return (
                            <Col key={index} xs={12} lg={3} md={6} sm={6}>
                                <BookItem key={index} title={response.title}></BookItem>
                            </Col>
                        );

                    })}
                </Row>
            </Container>
        </div>
    )
}

export default Dashboard;
