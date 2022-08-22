import Form from 'react-bootstrap/Form'

function Address({ handleInput }) {

    return (
        <div className='col-sm-6'>
            <Form>
                <Form.Group controlId='formUser'>
                    <Form.Label className='small mb-0'>Country</Form.Label>
                    <Form.Control name='country' className='mb-2 shadow-none' size='sm' type='text' onChange={handleInput}></Form.Control>
                    <Form.Label className='small mb-0'>Address</Form.Label>
                    <Form.Control name='address' className='mb-2 shadow-none' size='sm' type='text' onChange={handleInput}></Form.Control>
                    <Form.Label className='small mb-0'>City</Form.Label>
                    <Form.Control name='city' className='mb-2 shadow-none' size='sm' type='text' onChange={handleInput}></Form.Control>
                    <Form.Label className='small mb-0'>Postal Code</Form.Label>
                    <Form.Control name='postalcode' className='mb-2 shadow-none' size='sm' type='text' onChange={handleInput}></Form.Control>
                </Form.Group>
            </Form>
        </div>
    )
}

export default Address