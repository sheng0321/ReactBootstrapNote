import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const NavBarExample = (props) => {
    const { setPage } = props;
    const [user, SetUser] = useState('');
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [isChecked, setIsChecked] = useState(false)
    const handleSwitchChange = (e) => {
        setIsChecked(e.target.checked);
        if (e.target.checked) {
            document.documentElement.setAttribute('data-bs-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-bs-theme', 'light');
        }

    }
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
        <Navbar expand='lg' className='mb-4 border round' style={{ boxShadow: "0px 8px 15px -6px rgba(0,0,0,0.6)", backgroundColor: 'salmon ' }}>
            <Container  >

                <Navbar.Brand href='#home' className='fs-3 text-light' onClick={() => {
                    user ?
                        setPage("HomePage") : alert("please log in first.")

                }}>Welcome</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='me-auto'>
                        <Nav.Link href='#home' onClick={() => user ?
                            setPage("HomePage") : alert("please log in first.")}>Home</Nav.Link>
                        <Nav.Link href='#about' onClick={() => user ?
                            setPage("ReportPage") : alert("please log in first.")}>Report</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Form.Check // prettier-ignore
                    type="switch"
                    style={{ color: 'salmon' }}
                    checked={isChecked}
                    onChange={handleSwitchChange}
                    label=" "

                />
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
                    <Form.Control onChange={(e) => handleLogin(e)} autoFocus style={{ opacity: '50%' }} />
                </Modal.Body>

            </Modal>
            <hr />
        </Navbar >
    )
}

export default NavBarExample
