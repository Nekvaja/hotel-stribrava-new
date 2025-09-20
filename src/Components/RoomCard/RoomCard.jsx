import './RoomCard.css'

export const RoomCard = ({ room, onSelectRoom }) => {
  return (
    
      <div 
      className="card"
      onClick={() => onSelectRoom(room.id)}
      >
        <img className="card__image" src={room.image} />
        <div className="card__title">{room.name}</div>
        <div className="card__body">{room.price} Kč na osobu</div>
      </div>
  
  )
}