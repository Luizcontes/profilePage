import { useEffect, useState } from 'react'
import './App.css'
import Profile from './components/Profile/Profile'
import User from './components/User.js'
import Address from './components/Address'
import Business from './components/Business'
import Button from 'react-bootstrap/Button'

function App() {

  const [data, setData] = useState({})
  const [value, setValue] = useState('')
  const [msg, setMsg] = useState('')
  const [btnClass, setBtnClass] = useState('')

  useEffect(() => {
    let dict = data
    dict['phone'] = value
    setData(dict)
  }, [value])


  const handleInput = e => {
    let dict = data
    dict[e.target.name] = e.target.value
    setData(dict)
    setMsg('')
    setBtnClass('')
  }

  const salveData = () => {
    const items = Object.values(data).filter((item) => {
      if (!(item === '')) {
        return item
      }
    }).length

    if (items !== 14) {
      setMsg('To submit your form please fulfill it entirely!!!')
      setBtnClass('text-danger')
    } else {
      setMsg('Form submitted!!!! Back-end logic comming soon!')
      setBtnClass('text-success')
    }
  }

  return (
    <div className="App p-5">
      <div className='container py-5 px-5 rounded'>
        <Profile />

        <div className='row my-5'>
          <User
            value={value}
            setValue={setValue}
            handleInput={handleInput}
          />
          <Address handleInput={handleInput} />
        </div>

        <Business handleInput={handleInput} />

        <div className='d-grid'>
          <p className={`m-0 p-0 text-center font-weight-bold fs-3 ${btnClass}`}>{msg}</p>
          <Button
            onClick={salveData}
            className='rounded-pill mt-0 shadow-none'
            size='lg'
            variant='primary'>
            SAVE
          </Button>{' '}
        </div>
      </div>

    </div>
  );
}

export default App;
