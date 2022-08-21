import Form from 'react-bootstrap/Form'

function Business() {

    return (
        <Form>
            <Form.Group className='my-4' controlId='formUser'>
                <Form.Label className='small mb-0'>Business Name</Form.Label>
                <Form.Control className='mb-2' size='sm' type='text' placeholder='Contes Store Inc'></Form.Control>
                <Form.Label className='small mb-0'>Category</Form.Label>
                <Form.Control className='mb-2' size='sm' type='text' placeholder='Electronics'></Form.Control>
                <Form.Label className='small mb-0'>Description</Form.Label>
                <Form.Control className='mb-2' size='sm' type='text' placeholder='E-commerce'></Form.Control>
            </Form.Group>
        </Form>
    )
}

export default Business