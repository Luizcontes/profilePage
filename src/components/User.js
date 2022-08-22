import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Date from './Date'
import Phone from './Phone/Phone'

function User({ handleInput, setValue, value }) {

    return (
        <div className='col-sm-6'>
            <Form>
                <Form.Group controlId='formUser'>
                    <Form.Label className='small mb-0'>First Name</Form.Label>
                    <Form.Control name='first' className='mb-2 bgcol shadow-none' size='sm' type='text' onChange={handleInput}></Form.Control>
                    <Form.Label className='small mb-0'>Last Name</Form.Label>
                    <Form.Control name='last' className='mb-2 shadow-none' size='sm' type='text' onChange={handleInput}></Form.Control>
                    <Form.Label className='small mb-0'>Birthday</Form.Label>
                    <Date handleInput={handleInput} />
                    <Form.Label className='small mb-0'>Phone</Form.Label>
                    <Phone setValue={setValue} value={value} />
                    {/* <Form.Control className='mb-2  shadow-none' size='sm' type='tel'></Form.Control> */}
                    <Form.Label className='small mb-0'>E-mail</Form.Label>
                    <Form.Control name='email' className='mb-2 shadow-none' size='sm' type='email' onChange={handleInput}></Form.Control>
                </Form.Group>
            </Form>
        </div>
    )
}

export default User