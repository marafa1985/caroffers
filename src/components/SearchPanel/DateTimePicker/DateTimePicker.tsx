import React from 'react'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import DateTimeInput from './DateTimeInput'

interface Props {
    placeholder: string
    id: string
    name: string
    onChange: React.Dispatch<React.SetStateAction<Date | null>>
    value: Date | null
}

const DateTimePicker: React.FC<Props> = (props) => {
    return (
        <div>
            <ReactDatePicker
                dateFormat="dd.MM.yyyy HH:mm"
                customInput={<DateTimeInput {...props} />}
                selected={props.value}
                placeholderText={props.placeholder}
                name={props.name}
                id={props.id}
                showTimeSelect
                isClearable
                onChange={date => props.onChange(date)}
            />
        </div>
    )
}

export default DateTimePicker
