export const ReservationItem = ({from, to, roomId, roomName, totalPrice, meal, pets, extraBed, accessible, tel, email}) => {
    return (
        <div className='reservation-list__item'>
            <div className='reservation-item__summary'>
                <p>Od: {from}</p>
                <p>Do: {to}</p>
                <p>Pokoj: {roomId} - {roomName}</p>
                <p>Total: {totalPrice} Kč</p>
            </div>
            <div className='reservation-item__extras'>
                <p>Strava: {meal}</p>
                <p>Mazlíček: {pets ? 'ANO' : 'NE'}</p>
                <p>Přistýlka: {extraBed ? 'ANO' : 'NE'}</p>
                <p>Bezbariérový přístup: {accessible ? 'ANO' : 'NE'}</p>
            </div>
            <div className='reservation-item__status'>
                <div className='reservation-item__rows'>
                    <div className='reservation-item__contact'>
                        <p>Tel: {tel}</p>
                        <p>Email: {email}</p>
                    </div>
                    <div className='reservation-item__state'>
                        <p>NEW</p>
                    </div>
                </div>
                <div className='reservation-item__rows'>
                    <div className='reservation-item__actions'>
                        <button className='btn btn--approve' type='button'>Potvrdit</button>
                        <button className='btn btn--reject' type='button'>Zrušit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}