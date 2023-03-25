import { Link } from 'react-router-dom';
import './Details.css'

export const Details = () => {


    return (
        <>
            <h1 className='details-header'>Details</h1>
            
            <section className='details'>
                <article className='details-content'>
                    <h3>Alpha Romeo</h3>

                    <div className='details-outer'>
                        <img src="https://g1-bg.cars.bg/2023-03-24_1/641d60a34ea732938e0fc562o.jpg" alt="car" />

                        <div className='details-inner'>
                            <p>Current price: <span>$3000</span></p>
                            <p>Category: <span>Vehicles</span></p>
                        </div>
                    </div>

                    <button><Link to="/details">Edit</Link></button>
                    <button><Link to="/details">Delete</Link></button>
                </article>

            </section>
        </>
    );
}