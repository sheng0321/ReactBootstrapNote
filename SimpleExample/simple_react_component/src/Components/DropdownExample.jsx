import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const DropdownExample = () => {
    const [selectItem, setSelectItem] = useState('');
    const handleSelect = (e) => {
        setSelectItem(e);
    }
    return (
        <Dropdown onSelect={handleSelect}>

            <Dropdown.Toggle variant='success' >{selectItem || 'Choose an event'}</Dropdown.Toggle>
            <Dropdown.Menu>

                <Dropdown.Item eventKey='Action 1'>Action</Dropdown.Item>
                <Dropdown.Item eventKey='Action 2'>Another action</Dropdown.Item>
                <Dropdown.Item eventKey='Action 3'>Something else</Dropdown.Item>
            </Dropdown.Menu>

        </Dropdown>
    )
}

export default DropdownExample
