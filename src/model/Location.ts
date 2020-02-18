import { sortByLocationName } from "./util"

export interface Location {
    locationName: string
    address: string
    placeID: string
}

export const availableLocations: Location[] = [
    {
        locationName: 'Munich Hofbräuhaus',
        address: 'Hofbräuhaus München, Platzl, Munich, Germany',
        placeID: 'ChIJxfxSz4t1nkcRLxq9ze1wwak'
    },
    {
        locationName: 'Stachus',
        address: 'Stachus, Munich, Germany',
        placeID: 'EhtLYXJsc3BsLiwgTcO8bmNoZW4sIEdlcm1hbnkiLiosChQKEgkfRGon93WeRxEvZKuqIIsjnxIUChIJJ8yNql7fnUcRAKU5CaQlHQU'
    },
    {
        locationName: 'Olympic Tower',
        address: 'Spiridon-Louis-Ring, Munich, Germany',
        placeID: 'ChIJU-Q6JoF2nkcRdQApBoHVU8s'
    },
    {
        locationName: 'English Garden',
        address: 'Englischer Garten, Munich, Germany',
        placeID: 'ChIJayv4lZd1nkcR0e_vfGLfm8k'
    },
    {
        locationName: 'Allianz Arena',
        address: 'Allianz Arena, Werner-Heisenberg-Allee, Munich, Germany',
        placeID: 'ChIJHyWKEoVznkcRI8QyjkJgTe0'
    },
    {
        locationName: 'Nymphenburg Castle',
        address: 'Schloss Nymphenburg, Schloß Nymphenburg, Munich, Germany',
        placeID: 'ChIJLWiif8x3nkcRZm0epRZWTCc'
    }
]

export const getAvailableLocationsSorted = availableLocations
    .sort(sortByLocationName)

export const getLocationByPlaceId = (placeId: string | undefined):
    Location | undefined => availableLocations.find((location) => location.placeID === placeId)