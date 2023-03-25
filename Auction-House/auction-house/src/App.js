import './App.css';

import { Routes, Route } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Home } from './components/Home/Home';
import { Catalog } from './components/Catalog/Catalog';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { NotFound } from './components/404/NotFound';
import { Details } from './components/Details/Details';


function App() {
    return (
        <>
            <Header />

            <main id='main'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/catalog' element={<Catalog />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/details' element={<Details />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>

            </main>

            <Footer />
        </>
    );
}

export default App;
