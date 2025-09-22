import { ReservationItem } from "../ReservationItem/ReservationItem"

export const ReservationsList = ({reservations, selectedPhase, onChangeState}) => {

    let noResultsMessage = '';

    if (selectedPhase === 'all') {
        noResultsMessage = '';
    } else if (selectedPhase === 'new') {
        noResultsMessage = 'nové '
    } else if (selectedPhase === 'rejected') {
        noResultsMessage = 'zrušené '
    } else {
        noResultsMessage = 'potvrzené '
    }


    return (
        <div className='reservation-list'>
            
            {reservations.length === 0 
            ? <p>Nemáte žádné {noResultsMessage}rezervace</p> 
            : reservations.map((reservation) => (
                <ReservationItem 
                key={reservation.id} 
                id={reservation.id}
                state={reservation.state}
                from={reservation.from}
                to={reservation.to}
                roomId={reservation.roomId}
                roomName={reservation.roomName}
                totalPrice={reservation.totalPrice}
                meal={reservation.meal}
                pets={reservation.pets}
                extraBed={reservation.extraBed}
                accessible={reservation.accessible}
                tel={reservation.tel}
                email={reservation.email}
                onChangeState={onChangeState}
                />
            ))
            }

        
        
        </div>
        )
        }