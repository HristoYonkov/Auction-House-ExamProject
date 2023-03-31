import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

import * as listingService from '../../services/listingService';
import './Details.css'

export const Details = () => {
    const [listing, setListing] = useState({});
    const { listingId } = useParams();
    
    const { user } = useContext(AuthContext);

    useEffect(() => {
        listingService.getOneListing(listingId)
            .then(result => {
                setListing(result);
                // setAlreadyLiked(result?.likes?.includes(user?._id));
            })
            .catch(err => console.log(err))
    }, [listingId]);

    return (

        <div>
            <h1 className='details-header'>Details</h1>

            <section className='details'>

                <article className='details-content'>
                    <div className='details-content-header'>
                        <h2>{listing.title}</h2>
                        <h2>Listed by: <span>{listing?._ownerId?.username}</span></h2>
                    </div>

                    <div className='details-content-middle'>
                        <div className="details-image-holder">
                            <img src={listing.imageUrl} alt="car" />
                        </div>

                        <div className='details-content-middle-inner'>
                            <p className='description-p'>Category: <span className='span-bold'>{listing.category}</span></p>
                            <p>Description: <br /> <span>{listing.description}</span></p>
                            <p>Current price: <span className='span-bold'>${listing.price}</span></p>
                            {!user._id && (
                                <div className='details-alert-wrapper'>
                                    <p className='details-alert'>You must be Loged-In to be able to bid!</p>
                                    <Link to={'/login'}><button>Log-In</button></Link>
                                </div>
                            )}
                            {user?._id && user._id === listing?._ownerId?._id && (
                                <p className='details-alert'>This is your listing!</p>
                            )}
                            {user?._id && user._id !== listing?._ownerId?._id && (
                                <>
                                    <input
                                        type="number"
                                        name="price"
                                        id='price'
                                        placeholder='Place your bid!'
                                    // value={formData.price}
                                    // onChange={onChangeHandler}
                                    // onBlur={onBlurHandler}
                                    />
                                    <button>Bid</button>
                                </>
                            )}
                        </div>
                    </div>

                    <div className='details-footer'>
                        {user?._id === listing?._ownerId?._id && (
                            <div className='details-button-wrapper'>
                                <Link to="/catalog"><button>Delete</button></Link>
                                <Link to={`/edit/${listingId}`}><button>Edit</button></Link>
                            </div>
                        )}
                    </div>
                </article>

            </section>
        </div>
    );
}