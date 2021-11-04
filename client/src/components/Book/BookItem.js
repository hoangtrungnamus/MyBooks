import React from 'react'
import { Card, Button } from 'react-bootstrap';
import eiditIcon from '../../img/pencil.svg';
import deleteIcon from '../../img/trash.svg';
import ngk from '../../img/ngk.jpg';

const BookItem = (props) => {
    return (
        <Card className="mt-4">
            <Card.Img variant="top" src={ngk} alt="Nhà giả kim" width="300px" height="300px"/>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <hr/>
                <Button className="mx-2" variant="outline-primary"> <img src={eiditIcon} alt="edit icon" /> </Button>
                <Button className="mx-2" variant="outline-danger"> <img src={deleteIcon} alt="edit icon" /> </Button>
            </Card.Body>
        </Card>
    )
}

export default BookItem
