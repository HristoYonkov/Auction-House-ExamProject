import { useContext, useEffect, useState } from 'react';

import './Catalog.css'
import * as listingService from '../../services/listingService';
import { OneListing } from './OneListing';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { Loader } from '../Loader/Loader';

export const Catalog = () => {
    const [allListings, setListing] = useState([]);
    const [loading, setLoading] = useState(true);
    const [empty, setEmpty] = useState(false);
    const [filling, setFilling] = useState(false);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        listingService.getAll()
            .then(listings => {
                if (listings.length > 0) {
                    setLoading(false);
                    setFilling(true);
                    setEmpty(false);
                } else {
                    setLoading(false);
                    setFilling(false);
                    setEmpty(true);
                }
                const filtered = listings.filter(x => x._ownerId !== user._id)
                setListing(listings);
            });
    }, [user._id]);

    return (
        <>
            <h1 className='catalog-header'>Catalog</h1>
            <section className="catalog">
                {filling && (
                    allListings.map(listing =>
                        <OneListing key={listing._id} listing={listing} />
                    )
                )}
                {loading && (
                    <Loader />
                )}
                {empty && (
                    <div className='no-content'>
                        <h1>There is no listings yet! Be the first one to List!</h1>
                        <Link type='button' to={`/create`}><button>add-Listing</button></Link>
                    </div>
                )}
            </section>
        </>
    );
}