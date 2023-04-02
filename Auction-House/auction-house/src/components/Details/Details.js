import { useContext, useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

import * as listingService from '../../services/listingService';
import './Details.css'

export const Details = () => {
    const [listing, setListing] = useState({});
    const [price, changePrice] = useState({ price: '' });
    const [isFollowed, setisFollowed] = useState(false);
    const [priceError, setPriceError] = useState(false);

    const { listingId } = useParams();
    const navigate = useNavigate();
    const { user, setServerErrors } = useContext(AuthContext);

    useEffect(() => {
        listingService.getOneListing(listingId)
            .then(result => {
                if (!result._id) {
                    navigate('/catalog');
                }
                setListing(result);
                setisFollowed(result?.follows.includes(user?._id));
            })
            .catch(err => console.log(err))
    }, [listingId, navigate]);

    const onChangeHandler = (e) => {
        setPriceError(false)
        changePrice(state => ({ ...state, price: e.target.value }));
    }

    const bidHandler = async () => {
        if (Number(price.price) <= listing.price) {
            setPriceError(true);
            return;
        }

        const response = await listingService.bidListing(listingId, user.accessToken, price);

        if (response.message) {
            return setServerErrors(response.message);
        }

        if (response._id) {
            setListing({ ...response })
        }

    }

    const followHandler = async () => {
        const response = await listingService.followListing(listing._id, user.accessToken);
        if (response._id) {
            setisFollowed(true);
        }
    }

    return (

        <div>
            <h1 className='details-header'>Details</h1>

            <section className='details'>

                <article className='details-content'>
                    <div className='details-content-header'>
                        <h2>{listing.title}</h2>
                        {user?._id && user._id !== listing?._ownerId?._id && !isFollowed && (
                            <button onClick={followHandler}>Follow</button>
                        )}
                        {user?._id && user._id !== listing?._ownerId?._id && isFollowed && (
                            <button onClick={followHandler}>Unfollow</button>
                        )}
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
                            {priceError && (
                                <p className='err-msg'>Your price must be higher than current price!</p>
                            )}
                            {!user._id && (
                                <div className='details-alert-wrapper'>
                                    <p className='details-alert'>You must be Logged-In to be able to bid!</p>
                                    <Link to={'/login'}><button>Log-In</button></Link>
                                </div>
                            )}
                            {user?._id && user._id === listing?._ownerId?._id && (
                                <p className='details-alert'>This is your listing!</p>
                            )}
                            {user?._id && user._id !== listing?._ownerId?._id &&
                                user._id !== listing?.bidder?._id && (
                                    <>
                                        <input
                                            type="number"
                                            name="price"
                                            id='price'
                                            placeholder='Place your bid!'
                                            value={price.price}
                                            onChange={onChangeHandler}
                                        // value={formData.price}
                                        // onChange={onChangeHandler}
                                        // onBlur={onBlurHandler}
                                        />
                                        <button onClick={bidHandler}>Bid</button>
                                    </>
                                )}
                            {user?._id && user._id === listing?.bidder?._id && (
                                <p className='details-alert'>You are the last bidder!</p>
                            )}
                        </div>
                    </div>

                    <div className='details-footer'>
                        <div className='details-button-wrapper'>
                            {user?._id === listing?._ownerId?._id && (
                                <Link to="/catalog"><button>End Auction</button></Link>

                            )}
                            {user?._id === listing?._ownerId?._id && !listing?.bidder && (
                                <Link to={`/edit/${listingId}`}><button>Edit</button></Link>
                            )}
                        </div>

                        {listing?.bidder?._id && (
                            <div className='hightes-bidder'>
                                <h2>Highest bidder: <span>{listing.bidder.username}</span></h2>
                            </div>
                        )}
                    </div>
                </article>

            </section>
        </div>
    );
}