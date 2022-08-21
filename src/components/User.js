import Form from 'react-bootstrap/Form'

function User() {

    return (
        <Form>
            <Form.Group className='my-4' controlId='formUser'>
                <Form.Label className='small mb-0'>First Name</Form.Label>
                <Form.Control className='mb-2' size='sm' type='text' placeholder='John'></Form.Control>
                <Form.Label className='small mb-0'>Last Name</Form.Label>
                <Form.Control className='mb-2' size='sm' type='text' placeholder='Doe'></Form.Control>
                <Form.Label className='small mb-0'>Birthday</Form.Label>
                <Form.Control className='mb-2' size='sm' type='text' placeholder=''></Form.Control>
                <Form.Label className='small mb-0'>Phone</Form.Label>
                <Form.Control className='mb-2' size='sm' type='tel' placeholder='999-999-999'></Form.Control>
                <Form.Label className='small mb-0'>E-mail</Form.Label>
                <Form.Control className='mb-2' size='sm' type='email' placeholder='johndoe@mail.com'></Form.Control>
            </Form.Group>
        </Form>
    )
}

export default User