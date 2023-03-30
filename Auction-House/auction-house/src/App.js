import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import './App.css';
import { useLocalStorage } from './hooks/localStorage';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Home } from './components/Home/Home';
import { Catalog } from './components/Catalog/Catalog';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { NotFound } from './components/404/NotFound';
import { Details } from './components/Details/Details';
import { Create } from './components/Create/Create';
import { Edit } from './components/Edit/Edit';
import { AuthContext } from './context/AuthContext';


function App() {
    const [user, setUser] = useLocalStorage('user', {})
    const [errors, setErrors] = useState('');

    const setUserSession = (data) => {
        setUser({ ...data })
    }

    const setServerErrors = (errors) => {
        setErrors(errors);
        setTimeout(() => {
            setErrors('');
        }, 3000)
    }

    return (
        <>
            <AuthContext.Provider value={{ setUserSession, user, setServerErrors }}>
                <Header />

                <main id='main'>
                    {errors.length > 0 &&
                        <article className='err-box'>
                            <h1>Server Error</h1>
                            <p>{errors}</p>
                        </article>
                    }
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/catalog' element={<Catalog />} />
                        <Route path='/create' element={<Create />} />
                        <Route path='/edit/:listingId' element={<Edit />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/details/:listingId' element={<Details />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>

                </main>

                <Footer />
            </AuthContext.Provider>
        </>
    );
}

export default App;
