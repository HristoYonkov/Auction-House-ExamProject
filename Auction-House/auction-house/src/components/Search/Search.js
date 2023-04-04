import './Search.css';

export const Search = () => {

    return (
        <>
            <div>
                <h1 className='search-header'>Search for listing..</h1>
            </div>
            <div className='search-wrapper'>
                <input type="text" id='search' placeholder='Type your search here..' name='search' className='search' />
                <button className='search-btn'>Search</button>
            </div>
            <section className='searchResults'>

            </section>
        </>
    )
}