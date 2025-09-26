import dayjs from "dayjs"

export const ReservationItem = ({id, from, to, roomId, roomName, totalPrice, meal, pets, extraBed, accessible, tel, email, state, onChangeState, createdAt}) => {
    return (
        <div className='reservation-list__item'>
            <div className='reservation-item__summary'>
                <p>Od: {dayjs(from).format('DD.MM.YYYY')}</p>
                <p>Do: {dayjs(to).format('DD.MM.YYYY')}</p>
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
                        <p>{(state.toUpperCase())}</p>
                        <p>{dayjs(createdAt).format('DD.MM.YYYY')}</p>
                    </div>
                </div>
                <div className='reservation-item__rows'>
                    <div className='reservation-item__actions'>
                        <button className='btn btn--approve' type='button'
                                onClick={() => onChangeState(id, 'approved')}
                        >Potvrdit</button>
                        <button className='btn btn--reject' type='button'
                                onClick={() => onChangeState(id, 'rejected')}
                        >Zrušit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}