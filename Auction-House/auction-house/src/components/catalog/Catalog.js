import { Link } from 'react-router-dom';
import './Catalog.css'

export const Catalog = () => {


    return (
        <>
            <h1 className='catalog-header'>CATALOG</h1>
            <section className="catalog">

                <article className='card'>
                    <h3>Alpha Romeo</h3>
                    <img src="https://g1-bg.cars.bg/2023-03-24_1/641d60a34ea732938e0fc562o.jpg" alt="car" />
                    <p>Current price: <span>$3000</span></p>
                    <p>Category: <span>Vehicles</span></p>
                    <button><Link to="/details">Details</Link></button>
                </article>
            </section>
        </>
    );
}