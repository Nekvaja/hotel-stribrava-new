import { RoomCard } from "../RoomCard/RoomCard"
import './RoomsList.css'

export const RoomsList = ({ rooms, onSelectRoom }) => {
  return (
    <section className="dark">
      <div className="container">
        <h2>Naše pokoje</h2>
        <p>
          Vyberte si, který z našich pokojů je pro vás ten pravý.
        </p>

        <div className="cards-row">
        {rooms.map((room) => (
          < RoomCard key={room.id} room={room} onSelectRoom={onSelectRoom}/>
        ))
        }
        </div>

      </div>
    </section>
  )
}