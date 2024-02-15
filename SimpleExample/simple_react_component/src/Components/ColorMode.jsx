import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Stack from 'react-bootstrap/Stack';

const ColorMode = () => {
    return (
       <Stack direction='horizontal' gap={3} className='d-flex justify-content-center'>
        <DropdownButton
        id='dropdown-button-light-example1'
        variant='secondary'
        title='Light dropdown'
        className='mt-2'
        data-bs-theme='light'
        >
            <Dropdown.Item href='#/action-1' active>Action</Dropdown.Item>
            <Dropdown.Item href='#/action-2' >Action2</Dropdown.Item>
            <Dropdown.Item href='#/action-3' >Action3</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href='#/action-4' >Action4</Dropdown.Item>

        </DropdownButton>
        <DropdownButton
        id='dropdown-button-dark-example2'
        variant='secondary'
        title='Dark dropdown'
        className='mt-2'
        data-bs-theme='dark'
        >
            <Dropdown.Item href='#/action-1' active>Action</Dropdown.Item>
            <Dropdown.Item href='#/action-2' >Action2</Dropdown.Item>
            <Dropdown.Item href='#/action-3' >Action3</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href='#/action-4' >Action4</Dropdown.Item>

        </DropdownButton>

       </Stack>
    )
}

export default ColorMode
