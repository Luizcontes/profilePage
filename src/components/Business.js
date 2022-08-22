import Form from 'react-bootstrap/Form'
import Category from './Category/Category'

function Business({ handleInput }) {

    return (
        <div className='row mb-4'>
            <Form>
                <Form.Group controlId='formUser'>
                    <div className='row'>
                        <div className='col-sm-6'>
                            <Form.Label className='small mb-0'>Business Name</Form.Label>
                            <Form.Control name='bussiness' className='mb-2 shadow-none' size='sm' type='text' onChange={handleInput}></Form.Control>
                            <Form.Label className='small mb-0'>Category</Form.Label>
                            <Category handleInput={handleInput}/>
                        </div>
                        <div className='col-sm-6'></div>
                    </div>

                    <div className='col-12'>
                        <Form.Label className='small mb-0'>Description</Form.Label>
                        <Form.Control name='description' as='textarea' rows={8} className='mb-2 shadow-none' size='sm' type='text' onChange={handleInput}></Form.Control>
                    </div >
                </Form.Group>
            </Form>
        </div>
    )
}

export default Business