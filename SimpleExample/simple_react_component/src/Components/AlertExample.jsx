import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/esm/Button';

const AlertExample = () => {
    return (
        <>
            {['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'].map((variant) => (
                <Alert
                    key={variant}
                    variant={variant}
                    className='mb-3'
                    dismissible
                >
                    <p> This is a {variant} alert - <Alert.Link href='www.google.com'>An example link </Alert.Link>check it out!</p>
                    <hr />
                    this is a divider

                </Alert>
            ))}
        </>
    )
}

export default AlertExample
