export const FiltersBar = ({onSelectPhase}) => {
    return (
        <div className='filters'>
            <div className='filters-state'>
                <button className='filters__state-btn filters__state-btn--all' 
                        value={'all'}
                        onClick={(event) => onSelectPhase(event.target.value)}
                >Všechny</button>
                <button className='filters__state-btn filters__state-btn--new'
                        value={'new'}
                        onClick={(event) => onSelectPhase(event.target.value)}
                >Nové</button>
                <button className='filters__state-btn filters__state-btn--approved'
                        value={'approved'}
                        onClick={(event) => onSelectPhase(event.target.value)}
                >Potvrzené</button>
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