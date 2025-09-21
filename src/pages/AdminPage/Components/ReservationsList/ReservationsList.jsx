import { ReservationItem } from "../ReservationItem/ReservationItem"

export const ReservationsList = ({reservations}) => {
    return (
        <div className='reservation-list'>
            
            {reservations.length === 0 
            ? <p>Nemáte žádné rezervace</p> 
            : reservations.map((reservation) => (
                <ReservationItem 
                key={reservation.id} 
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
                />
            ))
            }

        
        
        </div>
        )
        }