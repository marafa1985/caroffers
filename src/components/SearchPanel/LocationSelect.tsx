import React, { FC, useState } from 'react'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import { Location, getAvailableLocationsSorted, getLocationByPlaceId } from '../../model/Location'

interface Props {
    // getLocation: () => {}
}

const LocationSelect: FC<Props> = (props) => {
    const [location, setLocation] = useState<Location | undefined>()
    const [placeId, setPlaceId] = useState<string | undefined>()
    const handleChange = (event: React.ChangeEvent<any>) => {
        setPlaceId(event.target.value)
        setLocation(getLocationByPlaceId(event.target.value))
        console.log(location)
    }
    return (
        <FormControl >
            <InputLabel id="location-label">Please select nearest location</InputLabel>
            <Select style={{ minWidth: 350 }}
                labelId="location-label"
                id="location"
                value={placeId || ""}
                onChange={handleChange}>
                {getAvailableLocationsSorted.map((location: Location) =>
                    <MenuItem key={location.placeID} value={location.placeID}>
                        {location.locationName}
                    </MenuItem>
                )}
            </Select>
            <FormHelperText>Address: {location?.address}</FormHelperText>
        </FormControl>
    )
}

export default LocationSelect
