import { useEffect, useState } from "react"
import { FiltersBar } from "../FiltersBar/FiltersBar"
import { ReservationsList } from "../ReservationsList/ReservationsList"


export const ReservationPage = () => {

    const [reservations, setReservations] = useState([]);

    useEffect (() => {
        const fetchReservations = async () => {
            const response = await fetch("http://localhost:4000/api/reservations");
            const json = await response.json();
            setReservations(json.data)
            } 

        fetchReservations();
        

}, [])

    return (
        <main>
            <FiltersBar />
            <ReservationsList reservations={reservations}/>

        </main>
    )
}