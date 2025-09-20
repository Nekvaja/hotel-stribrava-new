import './Formular.css'

export const Formular = () => {
    return (
          <form>
              <div className="form-fields">
                <label htmlFor="from" className="field-label">Od:</label>
                <input id="from" className="field-input" type="date" />

                <label htmlFor="to" className="field-label">Do:</label>
                <input id="to" className="field-input" type="date" />
                
                <label htmlFor="people" className="field-label">Počet osob:</label>
                <select id="people" className="field-input">
                  <option value="" disabled selected>vyberte</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                
                <label htmlFor="meals" className="field-label">Stravování:</label>
                <select id="meals" className="field-input">
                  <option value="" disabled selected>vyberte</option>
                  <option value="none" >bez stravování</option>
                  <option value="breakfast">Snídaně</option>
                  <option value="half">Polopenze</option>
                  <option value="full">Plná penze</option>
                </select>

                <label htmlFor="pets" className="field-label">Domácí mazlíček:</label>
                <input id="pets" className="field-input" type="checkbox" />
                
                <label htmlFor="extra-bed" className="field-label">Přistýlka pro dítě:</label>
                <input id="extra-bed" className="field-input" type="checkbox" />
                
                <label htmlFor="accessible" className="field-label">Bezbariérový přístup:</label>
                <input id="accessible" className="field-input" type="checkbox" />

                <label htmlFor="email" className="field-label">email:</label>
                <input id="email" className="field-input" type="email" />

                <label htmlFor="phone" className="field-label">Telefon:</label>
                <input id="phone" className="field-input" type="tel" />

              </div>
              <button className="wide" type="submit" >Odeslat</button>
            </form>
    )
};