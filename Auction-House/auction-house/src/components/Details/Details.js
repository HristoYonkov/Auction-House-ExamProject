import { Link } from 'react-router-dom';
import './Details.css'

export const Details = () => {


    return (
        <>
            <h1 className='details-header'>Details</h1>

            <section className='details'>

                <article className='details-content'>
                    <div className='details-content-header'>
                        <h2>Alpha Romeo</h2>
                        <h2>Listed by: <span>Hristo</span></h2>
                    </div>

                    <div className='details-content-middle'>
                        <img src="https://g1-bg.cars.bg/2023-03-24_1/641d60a34ea732938e0fc562o.jpg" alt="car" />

                        <div className='details-content-middle-inner'>
                            <p>Category: <span>Vehicles</span></p>
                            <p>Description: <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, aliquam!</span></p>
                            <p>Current price: <span>$3000</span></p>
                        </div>
                    </div>

                    <div className='details-button-wrapper'>
                        <button><Link to="/details">Edit</Link></button>
                        <button><Link to="/details">Delete</Link></button>
                    </div>
                </article>

            </section>
        </>
    );
}