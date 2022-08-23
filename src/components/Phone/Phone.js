import './Phone.css'
import PhoneInput from 'react-phone-number-input'

function Phone({ setValue, value }) {


    return (
            <PhoneInput className='container p-0 mb-2'
                international
                countryCallingCodeEditable={false}
                defaultCountry='US'
                value={value}
                onChange={setValue}
            />
    )
}

export default Phone