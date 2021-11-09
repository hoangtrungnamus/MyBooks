import React, { useContext, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { LoveContext } from './LoveContext';

const BookReviewsItem = (props) => {
    const { count, setCount } = useContext(LoveContext);
    const [love, setLove] = useState(false);
    function loveHandler() {
        setLove(!love);
        love === true ? setCount(count - 1) : setCount(count + 1);
    }
    return (
        <>
            <Card style={{height: "350px"}} className="my-2 imgHover">
                <Card.Img className="mt-2" variant="top" src={props.image} alt="Nhà giả kim" width="100px" height="200px" />
                <hr />
                <Card.Body>
                    <Card.Title style={{ fontSize: "1em" }}>{props.title}</Card.Title>
                    <Button variant={love ? 'outline-danger' : 'danger'} onClick={loveHandler} >{love ? 'Loved' : 'Love'}</Button>
                </Card.Body>
            </Card>

        </>
    )
}

export default BookReviewsItem;
