import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio, { RadioProps } from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

interface Props {

}

const GreenRadio = withStyles({
    root: {
        color: '#ff7d19',
        '&$checked': {
            color: '#ff7d19',
        },
    },
    checked: {},
})((props: RadioProps) => <Radio color="default" {...props} />);

const TourDuration: React.FC = () => {
    const [duration, setDuration] = React.useState<number>(120);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDuration(Number(event.target.value))
    };

    return (
        <RadioGroup style={{  marginLeft:20 }}
            aria-label="position"
            name="position"
            value={duration}
            onChange={handleChange} row>
            <FormControlLabel
                value="top"
                control={
                    <GreenRadio
                        checked={duration === 120}
                        onChange={handleChange}
                        value={120}
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': '120' }}
                    />
                }
                label="2 hours"
                labelPlacement="end"
            />
            <FormControlLabel
                value="top"
                control={
                    <GreenRadio
                        checked={duration === 180}
                        onChange={handleChange}
                        value={180}
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': '180' }}
                    />
                }
                label="3 hours"
                labelPlacement="end"
            />
            <FormControlLabel
                value="top"
                control={
                    <GreenRadio
                        checked={duration === 240}
                        onChange={handleChange}
                        value={240}
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': '240' }}
                    />
                }
                label="4 hours"
                labelPlacement="end"
            />
        </RadioGroup>
    )
}

export default TourDuration
