import Form from 'react-bootstrap/Form'

function Address() {

    return (
        <Form>
            <Form.Group className='my-4' controlId='formUser'>
                <Form.Label className='small mb-0'>Country</Form.Label>
                <Form.Control className='mb-2' size='sm' type='text' placeholder='USA'></Form.Control>
                <Form.Label className='small mb-0'>Address</Form.Label>
                <Form.Control className='mb-2' size='sm' type='text' placeholder='50 Fifth Avenue'></Form.Control>
                <Form.Label className='small mb-0'>City</Form.Label>
                <Form.Control className='mb-2' size='sm' type='text' placeholder='New York'></Form.Control>
                <Form.Label className='small mb-0'>Postal Code</Form.Label>
                <Form.Control className='mb-2' size='sm' type='text' placeholder='10011'></Form.Control>
            </Form.Group>
        </Form>
    )
}

export default Address