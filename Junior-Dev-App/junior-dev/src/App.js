import './App.css';
import { Header } from './components/header/Header';
import { Routes, Route } from 'react-router-dom';
import { Footer } from './components/footer/Footer';
import { Home } from './components/home/Home';
import { Catalog } from './components/catalog/Catalog';


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
