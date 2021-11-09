import React, { useState, useContext } from 'react'
import { Modal, Button, Alert } from 'react-bootstrap';
import deleteIcon from '../../img/trash.svg';
import {BookContext} from './BookContext';

const DeleteBook = (props) => {
    const { deleteBook } = useContext(BookContext);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const bookId = props.id;

    async function onSubmitDelete(){
        const res = await deleteBook(bookId);
        if(res.status === 200){
            alert(res.data.message);
            handleClose();
            window.location.reload(true);
        }
    }

    return (
        <>
            <Button className="mx-2"  variant="outline-danger" onClick={handleShow}>
            <img src={deleteIcon} alt="edit icon" />
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title style={{fontSize: '1.3em'}} >Are you sure you want to delete this book?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Alert variant="danger">This book will be deleted</Alert>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={onSubmitDelete} variant="danger">Understood</Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DeleteBook
