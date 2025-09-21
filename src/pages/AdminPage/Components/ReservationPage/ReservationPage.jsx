import { useEffect, useState } from "react"
import { FiltersBar } from "../FiltersBar/FiltersBar"
import { ReservationsList } from "../ReservationsList/ReservationsList"


export const ReservationPage = () => {

    const [reservations, setReservations] = useState([]);
    const [phase, setPhase] = useState('all')
    

    useEffect (() => {
        const fetchReservations = async () => {

            const url = phase === 'all'
            ? 'http://localhost:4000/api/reservations'
            : `http://localhost:4000/api/reservations?filter=state:eq:${phase}`
            
            const response = await fetch(url);
            
            const json = await response.json();
            setReservations(json.data)
            console.log(json.data)
            } 

        fetchReservations();
        

}, [phase])

    const handleSelectPhase = (filter) => {
        setPhase(filter)
    }

    return (
        <main>
            <FiltersBar onSelectPhase={handleSelectPhase} selectedPhase={phase}/>
            <ReservationsList reservations={reservations}/>

        </main>
    )
}