import { Link } from 'react-router-dom';
import './Home.css'

export const Home = () => {
    // https://lyonturnbull.blob.core.windows.net/site-images/LT%20saleroom%20-%20about%20us%20-%20580px.jpg
    return (
        <>
        <div className='home'>
            <div className="home-img-holder">
                <h1>Welcome to our Auction House!</h1>
                <img src="https://lyonturnbull.blob.core.windows.net/site-images/LT%20saleroom%20-%20about%20us%20-%20580px.jpg" alt="gallery" />
            </div>
            <div className='flying-browse'>
                <Link className='link' to={'/catalog'}><button>Browse</button></Link>
                <p>If you want to browse our listings?</p>
            </div>
            <div className='flying-create'>
                <Link className='link' to={'/create'}><button>add-Listing</button></Link>
                <p>If you want to post your listing?</p>
            </div>
        </div>
        </>
    );
}