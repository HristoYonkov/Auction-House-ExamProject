import { Link } from 'react-router-dom';
import { memo } from 'react';

import './ListingItem.css';

const ListingItem = ({ listing, user, takeListing }) => {

    return (
        <article className='auctions-card'>
            <h3>{listing.title}</h3>
            <div className="auctions-card-image-holder">
                <img src={listing.imageUrl} alt="someImage" />
            </div>
            <p>Category: <span>{listing.category}</span></p>
            <p>Current price: <span>${listing.price}</span></p>
            {listing?.bidder === user?._id && listing?.isClosed && (
                <>
                    <h4 className='closed-auction'>Won!!!</h4>
                    <Link type='button' to={`/details/${listing._id}`}><button>Details</button></Link>
                </>
            )}
            {listing?._ownerId === user?._id && listing?.isClosed && (
                <>
                    <h4 className='closed-auction'>Closed!!!</h4>
                    <button onClick={() => takeListing(listing._id)}>Delete</button>
                </>
            )}
            {!listing?.isClosed && (
                <Link type='button' to={`/details/${listing._id}`}><button>Details</button></Link>
            )}
        </article>
    );
}

export default memo(ListingItem);
// memo(): Is HOC! => Only if you want to rerender single component if only his props are changed!

// const result = useMemo(() => {
//     // useMemo(): => Used for slow calculations and remmember the result.
//     return 42;
// })