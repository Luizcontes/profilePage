import Figure from 'react-bootstrap/Figure'
import { useState, useEffect } from 'react'
import './Profile.css'
import Form from 'react-bootstrap/Form'

function Profile({ picture }) {

    const [image, setImage] = useState('img/bg-camera.jpg')
    const [click, setClick] = useState('')

    return (
        <Figure className='my-0'>
            <Form.Group controlId='formUser'>
                <Form.Control
                    className='arquivo'
                    type='file'
                    ref={input => setClick(input)}
                    onChange={e => {
                        setImage(URL.createObjectURL(click.files[0]))
                    }}
                />
                <Figure.Image
                    className='my-0 picture'
                    // width={150}
                    // height={150}
                    src={image}
                    roundedCircle
                    onClick={e => {
                        click.click()
                    }
                    }
                />
            </Form.Group>
        </Figure>
    )
}

export default Profile