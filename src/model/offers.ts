interface VehicleImages {
    web: string
}
interface VehicleType {
    title: string,
    exampleCar: string
    name: string
    nrOfPassengers: string
    nrOfBaggage: string
    images: VehicleImages
}
export interface Offer {
    amount: number
    amountNet: number
    currency: string
    offerIdentifier: string
    vehicleType: VehicleType
}

export interface ErrorMessage {
    errorConstant: string
    errorMessage: string
    requestId: string
}