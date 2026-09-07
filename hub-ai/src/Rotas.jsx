import './index.scss';
import App from './Pages/Home/Home.jsx';
import Tutoriais from './Pages/Tutoriais/tutoriais.jsx';
import Ferramentas from './Pages/Ferramentas/ferramentas.jsx';
import Praticas from './Pages/BoasPraticas/boaspraticas.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NotFound from './Pages/NotFound/notfound.jsx';
import Contatos from './Pages/Contato/contatos.jsx';

export default function Router(){
    return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element= { <App /> } />
        <Route path='/tutoriais' element= { <Tutoriais /> } />
        <Route path='/ferramentas' element= { <Ferramentas /> } />
        <Route path='/praticas' element= { <Praticas /> } />
        <Route path='/contato' element= { <Contatos /> } />


        <Route path='*' element= { <NotFound /> } />
      </Routes>
    </BrowserRouter>
    );
}