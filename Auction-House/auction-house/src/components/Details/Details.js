import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import * as listingService from '../../services/listingService';
import './Details.css'

export const Details = () => {
    const { listingId } = useParams();
    const [listing, setListing] = useState({});

    useEffect(() => {
        listingService.getOneListing(listingId)
            .then(result => {
                setListing(result)
                // setAlreadyLiked(result?.likes?.includes(user?._id));
            })
            .catch(err => console.log(err))
    }, [listingId]);

    return (

        <>
            <h1 className='details-header'>Details</h1>

            <section className='details'>

                <article className='details-content'>
                    <div className='details-content-header'>
                        <h2>{listing.title}</h2>
                        <h2>Listed by: <span>Hristo</span></h2>
                    </div>

                    <div className='details-content-middle'>
                        <div className="details-image-holder">
                            <img src={listing.imageUrl} alt="car" />
                        </div>

                        <div className='details-content-middle-inner'>
                            <p className='description-p'>Category: <span className='span-bold'>{listing.category}</span></p>
                            <p>Description: <br /> <span>{listing.description}</span></p>
                            <p>Current price: <span className='span-bold'>${listing.price}</span></p>
                            <button>Bid</button>
                        </div>
                    </div>

                    <div className='details-footer'>
                        <div className='details-button-wrapper'>
                            <Link to="/catalog"><button>Delete</button></Link>
                            <Link to="/edit"><button>Edit</button></Link>
                        </div>
                    </div>
                </article>

            </section>
        </>
    );
}