import './index.scss';
import App from './Pages/Home/Home.jsx';
import Tutoriais from './Pages/Tutoriais/tutoriais,.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

export default function Router(){
    return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element= { <App /> } />
        <Route path='/tutoriais' element= { <Tutoriais /> } />
      </Routes>
    </BrowserRouter>
    );
}