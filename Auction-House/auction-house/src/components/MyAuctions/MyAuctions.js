import { useEffect, useState, useContext } from 'react';

import './MyAuctions.css';
import { ListingItem } from './ListingItem/ListingItem';
import * as listingService from '../../services/listingService';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

export const MyAuctions = () => {
    const [myListings, setMyListings] = useState([]);
    const [userFollows, setUserFollows] = useState([]);

    const { user } = useContext(AuthContext);
    useEffect(() => {
        listingService.getUserListings(user.accessToken)
            .then(myListings => setMyListings([]))
    }, [user.accessToken]);

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
                setUserFollows([])
            });
    }, [user.accessToken]);

    return (
        <div>
            <h1 className='myAuctions-header'>My Auctions</h1>
            <section className='my-auctions'>

                <div className='my-listings'>
                    <h2 className='my-listings-header'>My Published Auctions</h2>
                    <div className='my-listings-wrapper'>

                        {myListings.map(x => <ListingItem key={x._id} listing={x} />)}
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