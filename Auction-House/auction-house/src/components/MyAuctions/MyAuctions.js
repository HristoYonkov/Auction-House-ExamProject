import { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './MyAuctions.css';
import { ListingItem } from './ListingItem/ListingItem';
import * as listingService from '../../services/listingService';
import { AuthContext } from '../../context/AuthContext';

export const MyAuctions = () => {
    const [myListings, setMyListings] = useState([]);
    const [userFollows, setUserFollows] = useState([]);
    const [onDelete, setOnDelete] = useState([])

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const deleteHandler = async (listing, user) => {
        const result = await listingService.deleteListing(listing, user.accessToken);
        setOnDelete([]);
        if (result?.message) {

        }
    }

    const takeListing = (listing) => {
        deleteHandler(listing, user);
    }

    useEffect(() => {
        listingService.getUserListings(user.accessToken)
            .then(myListings => setMyListings(myListings))
    }, [user.accessToken, onDelete]);

    useEffect(() => {
        listingService.getUserFollows(user.accessToken)
            .then(data => {
                if (data.length > 0) {
                    // setLoaded(false)
                    // setHasItems(true)
                    // setIsEmpty(false)
                } else {
                    // setLoaded(false)
                    // setIsEmpty(true)
                }
                setUserFollows(data)
            });
    }, [user.accessToken]);

    return (
        <div className='my-section'>
            <h1 className='myAuctions-header'>My Auctions</h1>
            <section className='my-auctions'>

                <div className='my-listings'>
                    <h2 className='my-listings-header'>Published Auctions</h2>
                    <div className='my-listings-wrapper'>

                        {myListings.map(x => <ListingItem key={x._id} listing={x} user={user}
                            deleteHandler={deleteHandler}
                            takeListing={takeListing} />)}

                        {myListings.length === 0 && (
                            <div className='no-content'>
                                <h1>You dont have posted auctions!</h1>
                                <Link type='button' to={`/create`}><button>add-Listing</button></Link>
                            </div>
                        )}

                    </div>
                </div>

                <div className='my-listings'>
                    <h2 className='my-listings-header'>My Follows</h2>
                    <div className='my-listings-wrapper'>

                        {userFollows.map(x => <ListingItem key={x._id} listing={x} />)}
                        {userFollows.length === 0 && (
                            <div className='no-content'>
                                <h1>You dont have followed auctions!</h1>
                                <Link type='button' to={`/catalog`}><button>Browse</button></Link>
                            </div>
                        )}

                    </div>
                </div>

            </section>
        </div>
    );
}