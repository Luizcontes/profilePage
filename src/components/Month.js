import Form from 'react-bootstrap/Form'

function Month({ handleInput }) {

    return (
        <div className='col-sm-4'>
            <Form.Select name='month' className='mb-2 text-muted shadow-none' size='sm' type='text' onChange={handleInput}>
                <option>Month</option>
                <option value="01">January</option>
                <option value="02">February</option>
                <option value="03">March</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">August</option>
                <option value="09">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
            </Form.Select>
        </div>
    )
}

export default Month