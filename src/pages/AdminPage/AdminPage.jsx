import './AdminPage.css';

export const AdminPage = () => {
    return (
        <div className='admin__container'>
            <header className='admin__header'>
                <h1>Hotel Stříbrava</h1>
                <p>Správa rezervací</p>
            </header>
            <main>
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
                <div className='reservation-list'>
                    <div className='reservation-list__item'>
                        <div className='reservation-item__summary'>
                            <p>Od: </p>
                            <p>Do: </p>
                            <p>Pokoj: </p>
                            <p>Total: </p>
                        </div>
                        <div className='reservation-item__extras'>
                            <p>Strava: </p>
                            <p>Mazlíček: </p>
                            <p>Přistýlka: </p>
                            <p>Bezbariérový přístup: </p>
                        </div>
                        <div className='reservation-item__status'>
                            <div className='reservation-item__rows'>
                                <div className='reservation-item__contact'>
                                    <p>Tel: </p>
                                    <p>Email: </p>
                                </div>
                                <div className='reservation-item__state'>
                                    <p>NEW</p>
                                </div>
                            </div>
                            <div className='reservation-item__rows'>
                                <div className='reservation-item__actions'>
                                    <button className='btn btn--approve' type='button'>Potvrdit</button>
                                    <button className='btn btn--reject' type='button'>Zrušit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}