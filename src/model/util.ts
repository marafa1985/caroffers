import { Location } from "./Location"

export const sortByLocationName = (locationA: Location, LocationB: Location) => {
  if (locationA < LocationB) {
    return -1;
  }
  if (locationA > LocationB) {
    return 1;
  }
  return 0;
}

export const formateDateToTimeZone = (date: Date): string =>
  date.toISOString().split('.')[0] + (date.getTimezoneOffset() / 60)
