import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import CardExample from './CardExample';

const ModalsExample = () => {
    const [show, setShow] = useState(true);
    const handleClose = () => { setShow(false) }
    const handleShow = () => { setShow(true) }

    return (
        <>
            {/* <Button onClick={handleShow}>Click to show Modal</Button> */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>

                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CardExample />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleClose}>Close</Button>
                    <Button variant='primary'>Save changes</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalsExample
