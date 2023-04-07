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
    const [filled, setFilled] = useState(false);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        listingService.getAll()
            .then(listings => {
                if (listings.length > 0) {
                    setLoading(false);
                    setFilled(true);
                    setEmpty(false);
                } else {
                    setLoading(false);
                    setFilled(false);
                    setEmpty(true);
                }
                const filtered = listings.filter(x => !x.isClosed)
                setListing(filtered);
            });
    }, [user._id]);

    return (
        <>
            <h1 className='catalog-header'>Catalog</h1>
            <div className='catalog-view'>
                <section className="catalog">
                    {loading && (
                        <Loader />
                    )}
                    {filled && (
                        allListings.map(listing =>
                            <OneListing key={listing._id} listing={listing} />
                        )
                    )}
                    {empty && (
                        <div className='no-content'>
                            <h1>There is no listings yet! Be the first one to List!</h1>
                            <Link type='button' to={`/create`}><button>add-Listing</button></Link>
                        </div>
                    )}
                </section>
            </div>
        </>
    );
}