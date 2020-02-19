import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Radio, { RadioProps } from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { Duration } from '../../../model/duration'

interface Props {
    setDuration: (duration: number) => void
    duration: number
}

const GreenRadio = withStyles({
    root: {
        color: '#ff7d19',
        '&$checked': {
            color: '#ff7d19',
        },
    },
    checked: {},
})((props: RadioProps) => <Radio color='default' {...props} />)

const TourDuration: React.FC<Props> = (props) => {
    const { duration, setDuration } = props
    return (
        <RadioGroup style={{ marginLeft: 20 }}
            aria-label='position'
            name='position'
            value={duration}
            onChange={(e) => { setDuration(Number(e.target.value)) }} row>
            {
                Duration.map((durationValue) =>
                    <FormControlLabel key={durationValue.hours}
                        value='top'
                        control={
                            <GreenRadio
                                checked={duration === durationValue.value}
                                onChange={(e) => { setDuration(Number(e.target.value)) }}
                                value={durationValue.value}
                                name='radio-button-demo'
                                inputProps={{ 'aria-label': `${durationValue.value}` }}
                            />
                        }
                        label={`${durationValue.hours} hours`}
                        labelPlacement='end'
                    />
                )
            }
        </RadioGroup>
    )
}

export default TourDuration
