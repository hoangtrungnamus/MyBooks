import React from 'react'
import { Card } from 'react-bootstrap';
import ngk from '../../img/ngk.jpg';
import EditBook from './EditBook';
import DeleteBook from './DeleteBook';

const BookItem = (props) => {
    return (
        <>
            <Card className="mt-4">
                <Card.Img variant="top" src={ngk} alt="Nhà giả kim" width="300px" height="300px" />
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

export default BookItem
