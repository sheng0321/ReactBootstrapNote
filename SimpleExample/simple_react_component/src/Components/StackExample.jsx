import React from 'react';
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';

const StackExample = () => {
    return (
        <>
        <h1>Stack vertical (default)</h1>
         <Stack gap={3}>
        <div className='p-2 border'>First Item</div>
        <div className='p-2 border'>Second Item</div>
        <div className='p-2 border'>Third Item</div>

       </Stack>
        <h1>Stack horizontal </h1>
         <Stack direction='horizontal' gap={3}>
        <div className='p-2 border'>First Item</div>
        {/* .ms-auto is a horizontal margin (margin start) */}
        <div className='p-2 border  ms-auto'>Second Item</div>
        {/* .vr (vertical rule)is a Divider */}
        <div className='vr' />
        <div className='p-2 border'>Third Item</div>

       </Stack>
       <h1>Stack work with button in colmn</h1>
        {/* for gap, valid values are 0-5 */}
       <Stack gap={2} className='col-md-5 mx-auto'>
        <Button variant='secondary'>Save Changes</Button>
        <Button variant='outline-secondary'>Cancel</Button>       
       </Stack>
       <h1>Stack work with button in Row</h1>
       <Stack direction='horizontal' gap={2}>
        {/* me (margin end) */}
        <Form.Control className='me-auto' placeholder='Add your item here ...' />
        <Button variant='secondary' >Submit</Button>
        <div className='vr' />
        <Button variant='outline-danger'>Reset</Button>       
       </Stack>
        </>
      
    )
}

export default StackExample
