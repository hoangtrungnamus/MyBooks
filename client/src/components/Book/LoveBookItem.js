import React, { useContext } from 'react'
import { Card, Button } from 'react-bootstrap';
import { LoveContext } from '../../contexts/LoveContext';

const LoveBookItem = (props) => {
    const { addToMyBooks, setCount, count } = useContext(LoveContext);
    async function add(event) {
        event.preventDefault();
        try {
            const res = await addToMyBooks({ _id: props.idBook, userId: props.userId, title: props.title, image: props.image });
            if (res.status === 200) {
                alert("Added");
                setCount(count - 1);
                window.location.reload(true);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Card style={{ height: "350px" }} className="imgHover my-2">
                <Card.Img className="mt-2" variant="top" src={props.image} alt={props.title} width="100px" height="200px" />
                <Card.Body>
                    <Card.Title style={{ fontSize: "1em" }}>{props.title}</Card.Title>
                    <hr />
                    <Button type="submit" onClick={add} variant="success">Finished</Button>
                </Card.Body>
            </Card>

        </>
    )
}

export default LoveBookItem;
