import React, { useState, useContext } from 'react'
import { Modal, Button, Form } from 'react-bootstrap';
import eiditIcon from '../../img/pencil.svg';
import { BookContext } from "../../contexts/BookContext";

const EditBook = (props) => {

    const {editBook} = useContext(BookContext);
    const [formValues, setFormValues] = useState({
        _id: props.id,
        title: '',
        image: ''
    });

    const { title, image } = formValues;

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

   
    async function edit () {
        try {
            const res = await editBook(formValues);
            console.log(res);
            if(res.status === 200){
                alert(res.data.message);
                window.location.reload(true);
            }
            
        } catch (error) {
            console.log(error);
        }
    }

     const handleSaveChanges = (event) => {
        event.preventDefault();
        edit();
        setShow(false);
    }

    const onChangeFormEdit = (event) => {
        setFormValues({ ...formValues, [event.target.name]: event.target.value });
    }
    return (
        <>
            <Button className="mx-2" variant="outline-primary" onClick={handleShow}>
                <img src={eiditIcon} alt="edit icon" />
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit your book</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="edit">
                        <Form.Group className="mb-3">
                            <Form.Label>Title of your book</Form.Label>
                            <Form.Control onChange={onChangeFormEdit} name="title" type="text" placeholder="Enter title" value={title} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={onChangeFormEdit} name="image" type="text" placeholder="Enter image link" value={image} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button type="submit" variant="primary" onClick={handleSaveChanges}>
                        Save Changes
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default EditBook
