import { useContext, useEffect, useState } from 'react';

import './Catalog.css'
import * as listingService from '../../services/listingService';
import { OneListing } from './OneListing';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export const Catalog = () => {
    const [allListings, setListing] = useState([]);

    const { user } = useContext(AuthContext);

    useEffect(() => {
        listingService.getAll()
        .then(listings => {
            const filtered = listings.filter(x => x._ownerId !== user._id)
            setListing(filtered)
        });
    }, []);

    return (
        <>
            <h1 className='catalog-header'>Catalog</h1>
            <section className="catalog">

                {allListings.map(listing =>
                    <OneListing key={listing._id} listing={listing} />
                )}

                {allListings.length === 0 && (
                    <div className='no-content'>
                        <h1>There is no listings yet! Be the first one to List!</h1>
                        <Link type='button' to={`/create`}><button>add-Listing</button></Link>
                    </div>
                )}
            </section>
        </>
    );
}