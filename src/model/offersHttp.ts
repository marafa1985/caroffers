const OFFER_URL = 'https://www.mydriver.com/api/v3/offers'

export interface OfferData {
    originPlaceId: string,
    selectedStartDate: string,
    duration: number,
    type: string
}

export const getOffer = async <T>(offerData: OfferData): Promise<T> => {
    const body = JSON.stringify(offerData)
    const response = await fetch(OFFER_URL, { body });
    const data = await response.json();
    return data;
}