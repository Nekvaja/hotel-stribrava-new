

export const FiltersBar = ({onSelectPhase, selectedPhase, onSort}) => {
         
    return (
        <div className='filters'>
            <div className='filters-state'>
                <button className={selectedPhase === 'all' ? 'filters__state-btn filters__state-btn--all filters__state-btn--active' : 'filters__state-btn filters__state-btn--all'}
                        value={'all'}
                        onClick={(event) => onSelectPhase(event.target.value)}
                >Všechny</button>
                <button className={selectedPhase === 'new' ? 'filters__state-btn filters__state-btn--all filters__state-btn--active' : 'filters__state-btn filters__state-btn--all'}
                        value={'new'}
                        onClick={(event) => onSelectPhase(event.target.value)}
                >Nové</button>
                <button className={selectedPhase === 'approved' ? 'filters__state-btn filters__state-btn--all filters__state-btn--active' : 'filters__state-btn filters__state-btn--all'}
                        value={'approved'}
                        onClick={(event) => onSelectPhase(event.target.value)}
                >Potvrzené</button>
                <button className={selectedPhase === 'rejected' ? 'filters__state-btn filters__state-btn--all filters__state-btn--active' : 'filters__state-btn filters__state-btn--all'}
                        value={'rejected'}
                        onClick={(event) => onSelectPhase(event.target.value)}
                >Zrušené</button>
            </div>

            <div className='filters__search'>
                <label htmlFor="search" className="field-label">Vyhledat:</label>
                <input id="search" className="field-input" type="text" 
                />
            </div>
            <div className='filters__sort'>
                <label htmlFor="sort" className=""
                       
                >Seřadit podle:</label>
                <select id="sort" className="field-input"
                        onChange={(event) => onSort(event.target.value)}
                        value={event.target.value}
                                         
                >
                  <option value="from"  
                  >data pobytu</option>
                  <option value={'createdAt'}
                  >data přijetí poptávky</option>
                </select>
            </div>
        </div>
    )
}