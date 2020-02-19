import React from 'react'
import './Offers.scss'
import { Offer } from '../../model/offers'

interface Props {
    offers: Offer[]
}

const Offers: React.FC<Props> = (props) => {
    const { offers } = props
    return (
        <div className='result'>
            <div className='offer-result'>{`We found ${offers.length} offers`}</div>
            <ul className='offers'>
                {
                    offers.length > 0 ?
                    offers.map((offer) =>
                        <li key={offer.offerIdentifier} className='offer'>
                            <div>
                                <img src={offer.vehicleType.images.web} alt='marketingImage' />
                            </div>
                            <div>
                                <h3>{offer.vehicleType.title}</h3>
                                <h5>{offer.vehicleType.exampleCar}</h5>
                                <div>
                                    <ul className="vehicle-info">
                                        <li className='info'><span>Category Name:</span>{offer.vehicleType.name}</li>
                                        <li className='info'><span>Passengers #:</span>{offer.vehicleType.nrOfPassengers}</li>
                                        <li className='info'><span>Baggages #:</span>{offer.vehicleType.nrOfBaggage}</li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <div className='invoice'>
                                    <div className='title'>
                                        Offer Details
                                </div>
                                    <div>
                                        <ul className="invoice-info">
                                            <li className='info'>
                                                <span className='before-offer'>{`${offer.amount} ${offer.currency}`}</span>
                                                <span className='after-offer'>{`${offer.amountNet} ${offer.currency}`}</span>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ) :
                    <p>No offer Found</p>
                }
            </ul>
        </div>
    )
}

export default Offers
