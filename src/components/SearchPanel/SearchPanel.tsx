import React, { FC, useState } from 'react'
import LocationSelect from './LocationSelect'
import DateTimePicker from './DateTimePicker/DateTimePicker'
import TourDuration from './TourDuration/TourDuration'
import Grid from '@material-ui/core/Grid'
import { Button } from '@material-ui/core'
import Search from '@material-ui/icons/Search'
import { Location } from '../../model/Location'
import { OfferData } from '../../model/offersHttp'
import { formateDateToTimeZone } from '../../model/util'
interface Props {
    getOffers: (offerData: OfferData) => void
}

const SearchPanel: FC<Props> = (props) => {
    const [fromDate, setFromDate] = useState<Date | null>(new Date())
    const [location, setLocation] = useState<Location | undefined>()
    const [duration, setDuration] = React.useState<number>(120)
    const [error, setError] = useState<string | undefined>()
    const getOffers = () => {
        setError(undefined)
        if (!location) {
            setError('Please select the nearest location.')
            return
        }
        if (!fromDate) {
            setError('Please select the tour\'s start date.')
            return
        }
        const offerData: OfferData = {
            originPlaceId: location?.placeID,
            selectedStartDate: formateDateToTimeZone(fromDate),
            duration: duration,
            type: 'DURATION'
        }
        props.getOffers(offerData)
    }
    return (
        <Grid container
            direction='column'
            alignItems='center'>
            <Grid style={{ padding: 10 }}
                container
                direction='row'
                justify='space-around'
                alignItems='center'>
                <LocationSelect setLocation={setLocation} location={location} />
                <DateTimePicker
                    id='startDate'
                    name='fromDate'
                    placeholder='From'
                    value={fromDate}
                    onChange={setFromDate} />
                <TourDuration duration={duration} setDuration={setDuration} />
                <Grid>
                    <Button style={{ background: '#ff7d19', }}
                        variant='contained'
                        color='primary'
                        endIcon={<Search />}
                        onClick={() => getOffers()}>
                        Search
                    </Button>
                </Grid>
            </Grid>
            <p className='error'>{error}</p>
        </Grid>
    )
}

export default SearchPanel
