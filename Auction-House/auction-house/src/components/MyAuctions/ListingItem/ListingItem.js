import { Link } from 'react-router-dom';

import './ListingItem.css';

export const ListingItem = ({ listing, user, takeListing }) => {
    
    return (
        <article className='auctions-card'>
            <h3>{listing.title}</h3>
            <div className="auctions-card-image-holder">
                <img src={listing.imageUrl} alt="someImage" />
            </div>
            <p>Category: <span>{listing.category}</span></p>
            <p>Current price: <span>${listing.price}</span></p>
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