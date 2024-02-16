import React, {useState} from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

const AlertDismissible = () => {
    const [show,setShow]=useState(true);

    return (
        <>
        <Alert show={show} variant='success'>
            <Alert.Heading>My Alert</Alert.Heading>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos soluta quo aliquam natus, eos fugit illo impedit nostrum! Voluptatibus, blanditiis.            </p>
                <hr />
                <div className='d-flex justify-content-end'>
                    <Button onClick={()=>setShow(false)} variant='outline-success'>Close me</Button>
                </div>
        </Alert>
        {!show && <Button onClick={()=>setShow(true)}>Show Alert</Button>}
        </>
    )
}

export default AlertDismissible
