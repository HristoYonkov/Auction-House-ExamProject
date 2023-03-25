import { Link } from 'react-router-dom';
import './Details.css'

export const Details = () => {


    return (
        <>
            <h1 className='details-header'>Details</h1>

            <section className='details'>

                <article className='details-content'>
                    <div className='details-content-header'>
                        <h2>Mitsubishi Lancer</h2>
                        <h2>Listed by: <span>Hristo</span></h2>
                    </div>

                    <div className='details-content-middle'>
                        <img src="https://g1-bg.cars.bg/2023-03-14_1/64102033dd10b6e9d40733d4o.jpg" alt="car" />

                        <div className='details-content-middle-inner'>
                            <p className='description-p'>Category: <span className='span-bold'>Vehicles</span></p>
                            <p>Description: <br /> <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, aliquam!</span></p>
                            <p>Current price: <span className='span-bold'>$13000</span></p>
                            <button>Bid</button>
                        </div>
                    </div>

                    <div className='details-footer'>
                        <div className='details-button-wrapper'>
                            <button><Link to="/details">Delete</Link></button>
                            <button><Link to="/details">Edit</Link></button>
                        </div>
                    </div>
                </article>

            </section>
        </>
    );
}