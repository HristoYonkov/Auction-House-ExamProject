import { Routes, Route } from 'react-router-dom';

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

    const setUserSession = (data) => {
        setUser({ ...data })
    }

    return (
        <>
            <AuthContext.Provider value={{setUserSession, user}}>
                <Header />

                <main id='main'>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/catalog' element={<Catalog />} />
                        <Route path='/create' element={<Create />} />
                        <Route path='/edit' element={<Edit />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/details' element={<Details />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>

                </main>
            </AuthContext.Provider>

            <Footer />
        </>
    );
}

export default App;
