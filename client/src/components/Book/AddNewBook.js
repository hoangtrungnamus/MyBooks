import { Form, Button } from 'react-bootstrap'
import { useState, useContext } from 'react';
import { BookContext } from "./BookContex";
import { useHistory } from 'react-router-dom';

const AddNewBook = () => {
    const history = useHistory();
    const { createBook } = useContext(BookContext);
    const [createForm, setCreateForm] = useState({
        title: '',
        image: '',
        userId: localStorage.getItem('userId')
    })
    let style = {
        textAlign: 'left',
        fontWeight: 'bold',
        display: 'block',
        color: 'black'
    }

    const { title, image } = createForm;

    function onChangeCreateForm(event) {
        setCreateForm({ ...createForm, [event.target.name]: event.target.value })
    }

    async function create(event) {
        event.preventDefault();
        const res = await createBook(createForm);
        if (res.status === 200) {
            alert('Your book is added!');
            history.push('/my-books');
        }
    }

    return (
        <>
            <div className="inner-auth" style={{ height: '80vh' }}>
                <Form className="add-new">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label style={style} className="justify-content-start">Title</Form.Label>
                        <Form.Control onChange={onChangeCreateForm} type="text" placeholder="Title of your book" name="title" value={title} />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label style={style}>Image of your book</Form.Label>
                        <Form.Control onChange={onChangeCreateForm} type="text" placeholder="Link" name="image" value={image} />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={create}>
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    )
}

export default AddNewBook;
