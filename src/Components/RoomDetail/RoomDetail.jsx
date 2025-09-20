import { Formular } from "../Formular/Formular"
import './RoomDetail.css'

export const RoomDetail = ({selectedRoom}) => {
    return (
        <section className="light">
        <div className="container">
          <h2>{selectedRoom.name}</h2>
          <div className="columns-2">
            <div className="column">
              <img src={selectedRoom.image} />
              <p>{selectedRoom.description}</p>
            </div>
          
        < Formular />

          </div>
        </div>
      </section>
    )
}