import React from 'react';
import Accordion from 'react-bootstrap/Accordion';



const AccordionExample = () => {
    return (
        <Accordion defaultActiveKey='0' >
            <Accordion.Item eventKey='0'>
                <Accordion.Header> Lorem, ipsum dolor.
                </Accordion.Header>
                <Accordion.Body>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita quae, molestias delectus qui doloremque nam consequatur rem quis nemo corrupti dolor sapiente magnam odio perferendis numquam blanditiis soluta sed repellat vero ea. Facere saepe rerum tempore, ipsam corporis accusamus officia.</Accordion.Body></Accordion.Item>

            <Accordion.Item eventKey='1'>
                <Accordion.Header> Lorem, ipsum dolor.
                </Accordion.Header>
                <Accordion.Body>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita quae, molestias delectus qui doloremque nam consequatur rem quis nemo corrupti dolor sapiente magnam odio perferendis numquam blanditiis soluta sed repellat vero ea. Facere saepe rerum tempore, ipsam corporis accusamus officia.</Accordion.Body></Accordion.Item>


        </Accordion>
    )
}

export default AccordionExample
