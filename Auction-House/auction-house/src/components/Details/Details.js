import { useContext, useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

import * as listingService from '../../services/listingService';
import './Details.css'

export const Details = () => {
    const [listing, setListing] = useState({});
    const [price, changePrice] = useState({ price: '' });
    const [isFollowed, setIsFollowed] = useState(false);
    const [priceError, setPriceError] = useState(false);

    const { listingId } = useParams();
    const navigate = useNavigate();
    const { user, setServerErrors } = useContext(AuthContext);

    useEffect(() => {
        listingService.getOneListing(listingId)
            .then(result => {
                if (!result._id || (result.isClosed && result.bidder?._id !== user._id)) {
                   navigate('/catalog');
                   return;
                }
                setListing(result);
                setIsFollowed(result?.follows.includes(user?._id));
            })
            .catch(err => console.log(err))
    }, [listingId, navigate, user?._id]);

    const onChangeHandler = (e) => {
        setPriceError(false)
        changePrice(state => ({ ...state, price: e.target.value }));
    }

    const bidHandler = async () => {
        if (Number(price.price) <= listing.price) {
            setPriceError(true);
            return;
        }

        if (price.price.length > 11) {
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
            setIsFollowed(true);
            navigate(`/details/${listingId}`);
        }
    }

    const unfollowHandler = async () => {
        try {
            await listingService.unfollowListing(listing._id, user.accessToken)
            navigate(`/my-auctions`);
            setIsFollowed(false);
        } catch (error) {
            console.log(error);
        }
    }

    const endAuctionHandler = async () => {
        if (window.confirm('Are you sure you want to "CLOSE" the auction?')) {
            try {
                await listingService.endAuction(listing._id, user.accessToken);
                navigate(`/my-auctions`);
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (

        <div>
            <h1 className='details-header'>Details</h1>

            <section className='details'>

                <article className='details-content'>
                    <div className='details-content-header'>
                        <h2>{listing.title}</h2>
                        {user?._id && user._id !== listing?._ownerId?._id && !isFollowed && !listing.isClosed && (
                            <button onClick={followHandler}>Follow</button>
                        )}
                        {user?._id && user._id !== listing?._ownerId?._id && isFollowed && !listing.isClosed && (
                            <button onClick={unfollowHandler}>Unfollow</button>
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
                                {priceError && price.price.length <= 11 &&(
                                    <p className='err-msg'>Your price must be higher than current price!</p>
                                )}
                                {priceError && price.price.length > 11 && (
                                    <p className='err-msg'>Pice must be no longer than 11 characters!</p>
                                )}
                                {!user._id && (
                                    <div className='details-alert-wrapper'>
                                        <p className='details-alert'>You must be Logged-In to be able to bid!</p>
                                        <Link to={'/login'}><button>Log-In</button></Link>
                                    </div>
                                )}
                                {/* {user?._id && user._id === listing?._ownerId?._id && (
                                    <p className='details-alert'>This is your listing!</p>
                                )} */}
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
                        </div>
                    </div>

                    <div className='details-footer'>
                        <div className='details-button-wrapper'>
                            {user?._id && user?._id === listing?._ownerId?._id && !listing.isClosed && (
                                <button onClick={endAuctionHandler}>Close Auction</button>
                            )}
                            {user?._id && user?._id === listing?._ownerId?._id && !listing?.bidder && (
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