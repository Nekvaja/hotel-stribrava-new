export const FiltersBar = () => {
    return (
        <div className='filters'>
            <div className='filters-state'>
                <button className='filters__state-btn filters__state-btn--all' >Všechny</button>
                <button className='filters__state-btn filters__state-btn--new' >Nové</button>
                <button className='filters__state-btn filters__state-btn--approved' >Potvrzené</button>
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