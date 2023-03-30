import './Footer.css';
// import { Link } from 'react-router-dom';


export const Footer = () => {

    return (
        <div className='footer'>
            <section className="input">
                <h1>SUBSCRIBE TO OUR NEWSLETTER</h1>
                <p>Sign up for our mailing list to get latest updates and offers.</p>
                <div className="inputs">
                    <input type="text" placeholder="Email Address.." />
                    <button>SUBSCRIBE</button>
                </div>
            </section>

            {/* <section className="contacts">
                <article>
                    <h3>Quick Links</h3>
                    <Link><p>Home</p></Link>
                    <Link><p>About Us</p></Link>
                    <Link><p>FAQs</p></Link>
                    <Link><p>Services</p></Link>
                    <Link><p>Contact</p></Link>
                </article>
                <article>
                    <h3>Services</h3>
                    <Link><p>Contact us</p></Link>
                    <Link><p>Write us</p></Link>
                    <Link><p>Call us</p></Link>
                </article>
                <article>
                    <h3>Address</h3>
                    <p className="addres">Sofia, Bulgaria</p>
                    <p>info@intime.com</p>
                    <p>(01) 800 854 633</p>
                </article>
                <article>
                    <h3>Follow Us</h3>
                    <p>
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-github"></i>
                    </p>
                </article>
            </section> */}

            <footer>Copyright © 2023 AuctionHouse. <span>Hristo Yonkov@</span><span id='sf-logo'>SoftUni</span> - All Rights Reserved.</footer>
        </div>
    );
}