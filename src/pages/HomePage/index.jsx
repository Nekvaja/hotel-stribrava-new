import { Footer } from '../../Components/Footer/Footer';
import { Header } from '../../Components/Header/Header';
import { RoomsPage } from '../../Components/RoomsPage/RoomsPage';
import './index.css';

export const Homepage = () => {
  return (
    <div className="container">
      < Header />

      < RoomsPage />

      < Footer />

      
    </div>
  );
};
