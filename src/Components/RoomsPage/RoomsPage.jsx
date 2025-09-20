import { useEffect } from "react";
import { useState } from "react";
import { RoomDetail } from "../RoomDetail/RoomDetail"
import { RoomsList } from "../RoomsList/RoomsList"

export const RoomsPage = () => {

    const [rooms, setRooms] = useState([]);
    const [selectedRoomId, setSelectedRoomId] = useState(null)
   

    useEffect(() => {
         const fetchRooms = async () => {
                const response = await fetch('http://localhost:4000/api/rooms')  
                const json = await response.json();
                setRooms(json.data);
                setSelectedRoomId(json.data[4].id)
         }  

         fetchRooms();
        
    }, []);

      const handleSelectRoom = (id) => {
        setSelectedRoomId(id)
    }
   
      const selectedRoom = rooms.find((room) => room.id === selectedRoomId)

    return (
<>
        {rooms.length === 0
                ? 'Načítám data...'
                : (
                    <>
                        < RoomsList rooms={rooms} onSelectRoom={handleSelectRoom}/>
                        < RoomDetail selectedRoom={selectedRoom}/>
                    </>
                )
        }

</>
    )
}