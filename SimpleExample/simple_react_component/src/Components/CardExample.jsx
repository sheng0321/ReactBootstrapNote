import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
const CardExample = () => {
    const [clockNo, setClockNo] = useState("");
    const handleImageError = () => {
        alert("His /her photo is not uploaded" + clockNo);
    }
    const handleKeyDown = (event) => {
        var clockno = event.target.value;


        setClockNo(clockno);

    };


    return (
        <>

            <Form.Control className='mb-3' type='text' value={clockNo} onChange={handleKeyDown} autoFocus />

            <Card style={{ width: '18rem' }}>
                <Card.Img variant='top' src={`https://picsum.photos/200/200`} style={{ maxHeight: '30rem' }} ></Card.Img>
                <Card.Body>
                    <Card.Title>Hello, world!</Card.Title>
                    <Card.Text style={{ textAlign: 'left' }} >
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, assumenda eaque? Fuga ullam veniam eaque doloribus ipsa illum quae adipisci!
                    </Card.Text>
                    <Button>Go Somewhere</Button>
                </Card.Body>



            </Card>
        </>
    )
}

export default CardExample
