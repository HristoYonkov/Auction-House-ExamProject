import './Search.css';

export const Search = () => {

    return (
        <div className='search-wrapper'>
            <input type="text" id='search' placeholder='Type your search here..' name='search' className='search' />
            <button className='search-btn'>Search</button>
        </div>
    )
}