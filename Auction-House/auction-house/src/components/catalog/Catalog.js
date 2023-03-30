import { useEffect, useState } from 'react';

import './Catalog.css'
import * as listingService from '../../services/listingService';
import { OneListing } from './OneListing';

export const Catalog = () => {
    const [allListings, setListing] = useState([]);
    useEffect(() => {
        listingService.getAll()
            .then(listings => setListing(listings));
    }, []);

    return (
        <>
            <h1 className='catalog-header'>Catalog</h1>
            <section className="catalog">

                {allListings.map(listing => 
                    <OneListing key={listing._id} listing={listing}  />  
                )}

            </section>
        </>
    );
}