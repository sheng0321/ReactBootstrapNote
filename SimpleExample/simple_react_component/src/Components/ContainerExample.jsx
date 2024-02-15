import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ContainerExample = () => {
    return (
        <Container fluid='md'> 
            <Row className='bg-success mb-3'>
                <Col> 1 of 2</Col>
                <Col> 2 of 2</Col>
            </Row>
            <Row className='bg-secondary' gap={3}>
                <Col className='border'> 1 of 3</Col>
                <Col className="border" lg={6}> 2 of 3</Col>
                <Col className='border'> 3 of 3</Col>
            </Row>
            <Row className='bg-secondary' gap={3}>
                <Col className='border'> 1 of 3</Col>
                <Col className="border" xs={5}> 2 of 3</Col>
                <Col className='border'> 3 of 3</Col>
            </Row>
            <Row>
        <Col className='border' xs>First, but unordered</Col>
        <Col className='border' xs={{ order: 2 }}>Second, but last</Col>
        <Col className='border' xs={{ order: 1 }}>Third, but second</Col>
      </Row>

      <Row>
        <Col className='border' xs={{ order: 'last' }}>First, but last</Col>
        <Col className='border' xs>Second, but unordered</Col>
        <Col className='border' xs={{ order: 'first' }}>Third, but first</Col>
      </Row>
      <Container as='h1'>
      <Row xs={2} md={4} lg={6}>
        <Col className='border'>1 of 2</Col>
        <Col className='border'>2 of 2</Col>
      </Row>
      <Row xs={1} md={2}>
        <Col className='border'>1 of 3</Col>
        <Col className='border'>2 of 3</Col>
        <Col className='border'>3 of 3</Col>
      </Row>
      <Row xs="auto">
        <Col className='border'>1 of 3</Col>
        <Col className='border'>2 of 3</Col>
        <Col className='border'>3 of 3</Col>
      </Row>
    </Container>
        </Container>
    );
}

export default ContainerExample
