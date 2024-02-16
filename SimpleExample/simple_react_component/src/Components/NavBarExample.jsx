import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const NavBarExample = (props) => {
    const { setPage } = props;
    const [user, SetUser] = useState('');
    const [showLoginModal, setShowLoginModal] = useState(false);
    const handleClose = () => { setShowLoginModal(false); }
    const handleShow = () => { setShowLoginModal(true) }
    const handleLogin = (e) => {

        if (e.target.value === "4557794") {
            SetUser("Sheng");
            setPage("HomePage");
            setShowLoginModal(false);

        }
        else {
            SetUser('');
            e.target.value = '';
            alert("No right to login!")
        }
    }
    return (
        <NavBar expand='lg' bg='primary' data-bs-theme='dark' className='mb-4'>
            <Container  >

                <NavBar.Brand href='#home' onClick={() => {
                    user ?
                        setPage("HomePage") : alert("please log in first.")

                }}>Welcome</NavBar.Brand>
                <NavBar.Toggle aria-controls="responsive-navbar-nav" />
                <NavBar.Collapse id="responsive-navbar-nav">
                    <Nav className='me-auto'>
                        <Nav.Link href='#home' onClick={() => user ?
                            setPage("HomePage") : alert("please log in first.")}>Home</Nav.Link>
                        <Nav.Link href='#about' onClick={() => user ?
                            setPage("ReportPage") : alert("please log in first.")}>Report</Nav.Link>
                    </Nav>
                </NavBar.Collapse>
                {!user ? <Button variant='outline-danger' onClick={handleShow} > Login</Button> :
                    <NavDropdown title={`Welcome ${user}`}>
                        <Nav.Item className='ms-1'>Profile</Nav.Item>
                        <NavDropdown.Divider />
                        <Nav.Item as='button' className='ms-1' onClick={() => { SetUser(''); setPage("AboutPage"); }}>Logout</Nav.Item>
                    </NavDropdown>
                }

            </Container>

            <Modal show={showLoginModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Waiting for your fob ...</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control onChange={(e) => handleLogin(e)} autoFocus style={{ opacity: '10%' }} />
                </Modal.Body>

            </Modal>
        </NavBar >
    )
}

export default NavBarExample
