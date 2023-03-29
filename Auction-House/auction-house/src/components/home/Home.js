import './Home.css'

export const Home = () => {
    // https://lyonturnbull.blob.core.windows.net/site-images/LT%20saleroom%20-%20about%20us%20-%20580px.jpg
    return (
        <>
        <div className='home'>
            <div className="home-img-holder">
                <h1>Welcome to our Auction House!</h1>
                <img src="https://lyonturnbull.blob.core.windows.net/site-images/LT%20saleroom%20-%20about%20us%20-%20580px.jpg" alt="gallery" />
            </div>
            <section className='card-holder'>
                <h2>Our ending offers!</h2>
            </section>
        </div>
        </>
    );
}