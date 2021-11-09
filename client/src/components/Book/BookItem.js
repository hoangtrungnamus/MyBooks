import React from 'react'
import { Card } from 'react-bootstrap';
import EditBook from './EditBook';
import DeleteBook from './DeleteBook';

const BookItem = (props) => {
    return (
        <>
            <Card style={{height: "350px"}} className="imgHover my-2">
                <Card.Img className="mt-2" variant="top" src={props.image} alt={props.title} width="100px" height="200px" />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <hr />
                    <EditBook id={props.id}> </EditBook>
                    <DeleteBook id={props.id}> </DeleteBook>
                </Card.Body>
            </Card>
            
        </>
    )
}

export default BookItem;
