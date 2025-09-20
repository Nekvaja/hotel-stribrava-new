import './RoomCard.css'

export const RoomCard = ({ room }) => {
  return (
    
      <div className="card">
        <img className="card__image" src={room.image} />
        <div className="card__title">{room.name}</div>
        <div className="card__body">{room.description}</div>
      </div>
  
  )
}