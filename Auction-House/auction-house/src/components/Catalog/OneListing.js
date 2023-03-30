import { Link } from "react-router-dom"


export const OneListing = ({ listing }) => {

    return (
        <article className='card'>
            <h3>{listing.title}</h3>
            <div className="card-image-holder">
                <img src={listing.imageUrl} alt="image" />
            </div>
            <p>Category: <span>{listing.category}</span></p>
            <p>Current price: <span>$3000</span></p>
            <Link type='button' to={`/details/${listing._id}`}><button>Details</button></Link>
        </article>
    )
}