import React from 'react';
import Button  from 'react-bootstrap/Button';

const VariantsExample = () => {
    return (
        <>
            <style type="text/css">
                {`
                .btn-flat {
                    background-color: purple;
                    color: white;
                }
                .btn-xxl {
                    padding: 1rem 1.5rem;
                    font-size: 1.5rem;
                }
                `}
            </style>
            <Button >Default Button</Button> {" "}
            <Button variant='flat' size='xxl'>
                Flat Button
            </Button>
        </>
    )
}

export default VariantsExample
