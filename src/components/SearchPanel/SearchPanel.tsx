import React, { FC, useState } from 'react'
import LocationSelect from './LocationSelect'
import DateTimePicker from './DateTimePicker/DateTimePicker'
import TourDuration from './TourDuration/TourDuration'
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import Search from '@material-ui/icons/Search';
interface Props {

}

const SearchPanel: FC = () => {
    const [fromDate, setFromDate] = useState<Date | null>(new Date())
    return (
        <Grid style={{ padding: 10 }}
            container
            direction="row"
            justify="space-around"
            alignItems="center">
            <LocationSelect />
            <DateTimePicker
                id="startDate"
                name="fromDate"
                placeholder="From"
                value={fromDate}
                onChange={setFromDate} />
            <TourDuration />
            <Grid>
                <Button style={{
                    background:'#ff7d19',
                }}
                    variant="contained"
                    color="primary"
                    endIcon={<Search />}
                >
                    Search
      </Button>
            </Grid>
        </Grid>
    )
}

export default SearchPanel
