import { useEffect, useState } from "react"
import { FiltersBar } from "../FiltersBar/FiltersBar"
import { ReservationsList } from "../ReservationsList/ReservationsList"
import dayjs from "dayjs";


export const ReservationPage = () => {

    const [reservations, setReservations] = useState([]);
    const [phase, setPhase] = useState('all')
    const [sortBy, setSortBy] = useState('from')
    

    useEffect (() => {
        const fetchReservations = async () => {

            const url = phase === 'all'
            ? 'http://localhost:4000/api/reservations'
            : `http://localhost:4000/api/reservations?filter=state:eq:${phase}`
            
            const response = await fetch(url);
            
            const json = await response.json();

            let sorted = '';
            
            if (sortBy === 'from') {
                    sorted = [...json.data].sort(
                (a, b) => dayjs(a.from).diff(dayjs(b.from))
                 )
                } else if (sortBy === 'createdAt') {
                    sorted = [...json.data].sort(
                (a, b) => dayjs(a.createdAt).diff(dayjs(b.createdAt))
                 )
                }


            setReservations(sorted)
           
            } 

        fetchReservations();
        

}, [phase, sortBy])

    const handleSelectPhase = (filter) => {
        setPhase(filter)
    }

     const handleSort = (value) => setSortBy(value);

    const handleChangeState = async (id, state) => {
        const response = await fetch(`http://localhost:4000/api/reservations/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify([
                {
                    "op": "replace",
                    "path": "/state",
                    "value": `${state}`
                }
            ]),
        });

        if (!response.ok) {
            alert('Něco se nepovedlo')
        } else {
            window.location.reload();
        }

    };

    return (
        <main>
            <FiltersBar onSelectPhase={handleSelectPhase} selectedPhase={phase} onSort={handleSort}/>
            <ReservationsList reservations={reservations} selectedPhase={phase} onChangeState={handleChangeState} />

        </main>
    )
}