import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import './MyAuctions.css';
import { ListingItem } from './ListingItem/ListingItem';
import * as listingService from '../../services/listingService';
import { AuthContext } from '../../context/AuthContext';
import { Loader } from '../Loader/Loader';

export const MyAuctions = () => {
    const [myListings, setMyListings] = useState([]);
    const [userFollows, setUserFollows] = useState([]);
    const [userWons, setUserWons] = useState([]);
    const [onDelete, setOnDelete] = useState([])

    const [listingLoad, setLisingLoad] = useState(true);
    const [listingFilled, setLisingFilled] = useState(false);
    const [listingEmpty, setLisingEmpty] = useState(false);

    const [followsLoad, setFollowsLoad] = useState(true);
    const [followsFilled, setFollowsFilled] = useState(false);
    const [followsEmpty, setFollowsEmpty] = useState(false);

    const { user } = useContext(AuthContext);

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
            .then(myListings => {
                if (myListings.length > 0) {
                    setLisingLoad(false);
                    setLisingFilled(true);
                    setLisingEmpty(false);
                } else {
                    setLisingLoad(false);
                    setLisingFilled(false);
                    setLisingEmpty(true);
                }
                setMyListings(myListings)
            })
    }, [user.accessToken, onDelete]);

    useEffect(() => {
        listingService.getUserFollows(user.accessToken)
            .then(data => {
                if (data.length > 0) {
                    setFollowsLoad(false);
                    setFollowsFilled(true);
                    setFollowsEmpty(false);
                } else {
                    setFollowsLoad(false);
                    setFollowsFilled(false);
                    setFollowsEmpty(true);
                }
                setUserFollows(data.filter(x => x.isClosed === false))
            });

    }, [user.accessToken]);

    useEffect(() => {
        listingService.getMyWons(user.accessToken)
            .then(data => {
                setUserWons(data);
            });
    }, [user.accessToken]);

    return (
        <div className='my-section'>
            <h1 className='myAuctions-header'>My Auctions</h1>
            <section className='my-auctions'>

                <div className='my-listings'>
                    <h2 className='my-listings-header'>Published Auctions</h2>
                    <div className='my-listings-wrapper'>
                        {listingLoad && (
                            <Loader />
                        )}
                        {listingFilled && (
                            myListings.map(x => <ListingItem key={x._id} listing={x} user={user}
                                deleteHandler={deleteHandler}
                                takeListing={takeListing} />
                            )
                        )}
                        {listingEmpty && (
                            <div className='no-content'>
                                <h1>You dont have posted auctions!</h1>
                                <Link type='button' to={`/create`}><button>add-Listing</button></Link>
                            </div>
                        )}
                    </div>
                </div>

                <div className='my-listings'>
                    <h2 className='my-listings-header'>My Follows / Wons</h2>
                    <div className='my-listings-wrapper'>
                        {followsLoad && (
                            <Loader />
                        )}
                        {userWons.length > 0 && (
                            userWons.map(x => <ListingItem key={x._id} listing={x} user={user} />)
                        )}
                        {followsFilled && (
                            userFollows.map(x => <ListingItem key={x._id} listing={x} />)
                        )}
                        {followsEmpty && (
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