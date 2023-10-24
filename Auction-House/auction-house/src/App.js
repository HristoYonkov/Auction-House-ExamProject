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
import { MyAuctions } from './components/MyAuctions/MyAuctions';
import { UserGuard } from './guards/UserGuard';
import { GuestGuard } from './guards/GuestGuard';
import { Search } from './components/Search/Search';


function App() {
    const [user, setUser] = useLocalStorage('user', {})
    const [errors, setErrors] = useState('');
    const [firstVisit, setFirstVisit] = useState(true);

    const setUserSession = (data) => {
        setUser({ ...data })
    }

    const setServerErrors = (errors) => {
        setErrors(errors);
        setTimeout(() => {
            setErrors('');
        }, 3000)
    }

    if (firstVisit) {
        alert('You must wait around a minute, for the server to start. Cause the hosting is free!')
        setFirstVisit(state => !state);
    }

    return (
        <>
            <AuthContext.Provider value={{ setUserSession, user, setServerErrors }}>
                <Header />

                <main id='main'>
                    {errors?.length > 0 &&
                        <article className='err-box'>
                            <h1>Server Error:</h1>
                            <p>{errors}</p>
                        </article>
                    }
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/catalog' element={<Catalog />} />
                        <Route path='/search' element={<Search />} />
                        {/* TODO: to fix responsive from here to bottom! */}
                        <Route path='/details/:listingId' element={<Details />} />

                        <Route element={<UserGuard />}>
                            <Route path='/login' element={<Login />} />
                            <Route path='/register' element={<Register />} />
                        </Route>

                        <Route element={<GuestGuard />}>
                            <Route path='/create' element={<Create />} />
                            <Route path='/my-auctions' element={<MyAuctions />} />
                            <Route path='/edit/:listingId' element={<Edit />} />
                        </Route>
                        <Route path='*' element={<NotFound />} />
                    </Routes>

                </main>

                <Footer />
            </AuthContext.Provider>
        </>
    );
}

export default App;
