import { useState } from "react"

export const FiltersBar = ({onSelectPhase, selectedPhase}) => {
     
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
                Vyhledat
            </div>
            <div className='filters__sort'>
                Seřadit
            </div>
        </div>
    )
}