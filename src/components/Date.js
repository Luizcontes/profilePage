import Day from './Day'
import Month from './Month'
import Year from './Year'

function Date({ handleInput}) {

    return (
        <div className='row'>
            <Day handleInput={handleInput}/>
            <Month handleInput={handleInput}/>
            <Year handleInput={handleInput}/>
        </div>
    )
}

export default Date