import React, { FC } from 'react'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import { Location, getAvailableLocationsSorted, getLocationByPlaceId } from '../../model/Location'

interface Props {
    setLocation: (location: Location) => void
    location: Location | undefined
}

const LocationSelect: FC<Props> = (props) => {
    const { location, setLocation } = props
    const handleChange = (event: React.ChangeEvent<any>) => {

        const selectedLocation = getLocationByPlaceId(event.target.value)
        if (selectedLocation) {
            if (selectedLocation) {
                setLocation(selectedLocation)
            }
        }
    }
    return (
        <FormControl >
            <InputLabel id="location-label">Please select nearest location</InputLabel>
            <Select style={{ minWidth: 350 }}
                labelId="location-label"
                id="location"
                value={location?.placeID}
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
