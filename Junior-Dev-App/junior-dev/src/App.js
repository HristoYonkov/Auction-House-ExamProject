import './App.css';
import { Header } from './components/header/Header';
import { Routes, Route } from 'react-router-dom';
import { Footer } from './components/footer/Footer';
import { Home } from './components/home/Home';


function App() {
  return (
    <>
      <Header />

      <main id='main'>
        <Routes>
          <Route path='/' element={<Home />} />

        </Routes>

      </main>

      <Footer />
    </>
  );
}

export default App;
