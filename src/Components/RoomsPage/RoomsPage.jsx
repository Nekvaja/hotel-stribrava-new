import { useEffect } from "react";
import { useState } from "react";
import { RoomDetail } from "../RoomDetail/RoomDetail"
import { RoomsList } from "../RoomsList/RoomsList"

export const RoomsPage = () => {

    const [rooms, setRooms] = useState([]);

    useEffect(() => {
         const fetchRooms = async () => {
                const response = await fetch('http://localhost:4000/api/rooms')  
                const json = await response.json();
                setRooms(json.data);
                console.log(json.data)
         }  

         fetchRooms();
        
    }, []);


    return (
<>
        {rooms.length === 0
                ? 'Načítám data...'
                : (
                    <>
                        < RoomsList />
                        < RoomDetail />
                    </>
                )
        }

</>
    )
}