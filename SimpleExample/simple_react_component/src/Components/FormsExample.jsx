import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormRange from 'react-bootstrap/esm/FormRange';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';

const FormsExample = () => {
    const [value, setValue] = useState(0);
    return (
        <Form >
            {/* disable control */}
            <Form.Group className='mb-3'>
                <Form.Label>Disabled input</Form.Label>
                <Form.Control placeholder='Disabled input' disabled />

            </Form.Group>

            <Form.Group className='mb-3'>
                <Form.Label>Disabled select menu</Form.Label>
                <Form.Select disabled>
                    <option>Disabled select</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Disabled checkbox</Form.Label>
                <Form.Check type='checkbox' label="Can't check this" disabled />
            </Form.Group>

            <Form.Group
                className='mb-3 text-left'
                controlId='formEmail'

            >
                <Form.Label >Email address</Form.Label>
                <Form.Control type='email' placeholder='Enter email' />
                <Form.Text > Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio incidunt excepturi voluptate deserunt expedita alias doloremque omnis dicta mollitia labore? Dolorum iusto obcaecati, velit deleniti molestias ad distinctio sunt est.</Form.Text>
            </Form.Group>

            <Form.Group
                className='mb-3'
                controlId='formPassword'
            >
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='Password' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formCheckbox'>
                <Form.Check type='checkbox' label="Check me out" />
            </Form.Group>
            <Form.Group controlId='formFile' className='mb-3'>
                <Form.Label>default file input example</Form.Label>
                <Form.Control type='file' />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label htmlFor='colorInput' >Color Picker</Form.Label>
                <Form.Control
                    type='color'
                    id='colorInput'
                    defaultValue='#56347c'
                    title='Choose your Color' />
            </Form.Group>

            {['checkbox', 'radio'].map((type) =>
            (
                <div key={`defult-${type}`} className='mb-3'>
                    <Form.Check type={type}
                        id={`default-${type}`}
                        label={`default ${type}`}
                    />
                    <Form.Check type={type}
                        id={`default-${type}`}
                        label={`disable ${type}`}
                        disabled
                    />
                </div>
            )
            )}

            <Form.Label>Range : {value}</Form.Label>
            <FormRange min={10} max={100} step={1} defaultValue={20} value={value} onChange={(e) => setValue(e.target.value)} />
            <InputGroup className='mb-3'>
                <Form.Control placeholder='search' />
                <Button variant='outline-secondary' >Search</Button>
            </InputGroup>
            <InputGroup className='mb-3'>
                <InputGroup.Text>Test</InputGroup.Text>
                <Form.Control placeholder='search' />

            </InputGroup>

            <FloatingLabel
                controlId='floatingInput'
                label="Email address"
                className='mb-3'>
                <Form.Control type='email' placeholder='name@example.com' />
            </FloatingLabel>
            <Button variant='primary' type='submit'> Submit</Button>

        </Form>
    )
}

export default FormsExample
