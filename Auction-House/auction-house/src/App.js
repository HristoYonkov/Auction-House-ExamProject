import './App.css';

import { Routes, Route } from 'react-router-dom';

import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Home } from './components/home/Home';
import { Catalog } from './components/catalog/Catalog';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';


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
                </Routes>

            </main>

            <Footer />
        </>
    );
}

export default App;
