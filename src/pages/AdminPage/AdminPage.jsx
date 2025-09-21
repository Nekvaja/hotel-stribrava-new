import './AdminPage.css';
import { Header } from './Components/Header/Header';
import { ReservationPage } from './Components/ReservationPage/ReservationPage';


export const AdminPage = () => {
    return (
        <div className='admin__container'>
            <Header/>
            <ReservationPage/>
        </div>
    )
}