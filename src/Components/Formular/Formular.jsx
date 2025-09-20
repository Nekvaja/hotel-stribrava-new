import { useState } from 'react';
import './Formular.css'
import dayjs from 'dayjs';

export const Formular = ({selectedRoom, pricing}) => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [people, setPeople] = useState(0);
  const [meal, setMeal] = useState('');
  const [pets, setPets] = useState(false);
  const [extraBed, setExtraBed] = useState(false);
  const [accessible, setAccessible] = useState(false);
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');

  const stayLength = Number(dayjs(to).diff(dayjs(from), 'day'));

  let mealPrice = 0;
  meal === '' ? mealPrice = 0 : mealPrice = pricing[0].meals[meal];

  let petPrice = 0;
  pets ? petPrice = (stayLength * selectedRoom.price) / 4 : 0;

  let extraBedPrice = 0;
  extraBed ? extraBedPrice = (stayLength * selectedRoom.price) / 2 : 0;
  
  const totalPrice = (mealPrice * people * stayLength) + (selectedRoom.price * stayLength * people) + petPrice + extraBedPrice;

  const handleSubmit = (event) => {
    event.preventDefault();
   }

    return (
          <form onSubmit={handleSubmit}>
              <div className="form-fields">
                <label htmlFor="from" className="field-label">Od:</label>
                <input id="from" className="field-input" type="date"
                        onChange={(event) => setFrom(event.target.value)}
                        value={from}
                  />

                <label htmlFor="to" className="field-label">Do:</label>
                <input id="to" className="field-input" type="date" 
                        onChange={(event) => setTo(event.target.value)}
                        value={to}
                />
                
                <label htmlFor="people" className="field-label">Počet osob:</label>
                <select id="people" className="field-input" 
                value={people}
                onChange={(event) => setPeople(Number(event.target.value))}
                >
                  <option value="0" disabled>vyberte</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                
                <label htmlFor="meals" className="field-label">Stravování:</label>
                <select id="meals" className="field-input" 
                value={meal}
                onChange={(event) => {
                  setMeal(event.target.value)
                }}
                >
                  <option value="" disabled>vyberte</option>
                  <option value="none" >bez stravování</option>
                  <option value="breakfast">Snídaně</option>
                  <option value="half">Polopenze</option>
                  <option value="full">Plná penze</option>
                </select>

                <label htmlFor="pets" className="field-label">Domácí mazlíček:</label>
                <input id="pets" className="field-input" type="checkbox" 
                checked={pets}
                onChange={() => setPets(!pets)}
                />
                
                <label htmlFor="extra-bed" className="field-label">Přistýlka pro dítě:</label>
                <input id="extra-bed" className="field-input" type="checkbox" 
                checked={extraBed}
                onChange={() => setExtraBed(!extraBed)}
                />
                
                <label htmlFor="accessible" className="field-label">Bezbariérový přístup:</label>
                <input id="accessible" className="field-input" type="checkbox" 
                checked={accessible}
                onChange={() => setAccessible(!accessible)}
                />

                <label htmlFor="email" className="field-label">email:</label>
                <input id="email" className="field-input" type="email" />

                <label htmlFor="phone" className="field-label">Telefon:</label>
                <input id="phone" className="field-input" type="tel" />

              </div>
              <h2>Celková cena za pobyt: {stayLength > 0 && people > 0 ? totalPrice : 0} Kč</h2>
              <button className="wide" type="submit">Odeslat</button>
            </form>
    )
};