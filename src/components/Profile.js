import Figure from 'react-bootstrap/Figure'

function Profile({ picture}) {

    return (
        <Figure className='my-0'>
            <Figure.Image
                className='my-0'
                width={150}
                height={150}
                src={picture}
                roundedCircle float-left />
        </Figure>
    )
}

export default Profile