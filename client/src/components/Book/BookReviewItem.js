import React, { useContext, useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { LoveContext } from '../../contexts/LoveContext';
import border from '../../img/border.png';
import fill from '../../img/fill.png';
import { Link } from 'react-router-dom';

const BookReviewsItem = (props) => {
    const { count, setCount, addToLoveBooks, removeFromLoves, loveBooks } = useContext(LoveContext);
    const [love, setLove] = useState(false);
    useEffect(() => {
        if (loveBooks.length > 0) {
            loveBooks.forEach(book => {
                if (book.idBook === props.idBook) {
                    setLove(true);
                }
            })
        }
    }, [loveBooks, props.idBook])

    function loveHandler() {
        setLove(!love);
        love === true ? setCount(count - 1) : setCount(count + 1);
        if (!love) {
            addToLoveBooks({ idBook: props.idBook, userId: localStorage.getItem('userId'), title: props.title, image: props.image });
        }
        if(love===true) {
            removeFromLoves(props.idBook);
        }
        window.location.assign('/love');
    }

    return (
        <>
            <Card style={{ height: "350px" }} className="my-2 imgHover">
                <Card.Img className="mt-2" variant="top" src={props.image} alt="Nhà giả kim" width="100px" height="200px" />
                <hr />
                <Card.Body>
                    <Card.Title style={{ fontSize: "1em" }}>{props.title}</Card.Title>
                    <Link to='/love'><button type="submit" className="heart" onClick={loveHandler} >
                        <img width="32px" src={love ? fill : border} alt="heart" />
                    </button></Link>
                </Card.Body>
            </Card>

        </>
    )
}

export default BookReviewsItem;
