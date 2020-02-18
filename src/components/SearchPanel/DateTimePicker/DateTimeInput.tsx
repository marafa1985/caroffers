import React from 'react'
import Calendar from '../../../img/calendar.svg'
import './DateTimeInput.scss'

interface Props {
    onChange: React.Dispatch<React.SetStateAction<Date | null>>
    value: Date | null
    placeholder: string
    id: string
    name: string
    onClick?: () => {}
}

const DateTimeInput: React.FC<Props> = (props) => {
    return (
        <div className='input-container'
            onClick={props.onClick}        >
            <img src={Calendar} alt='calendar icon' />
            <input type='text'
                id={props.id}
                name={props.name}
                value={props.value?.toString()}
                placeholder={props.placeholder}
                onChange={(e) => props.onChange(props.value)} />
        </div>
    )
}

export default DateTimeInput
