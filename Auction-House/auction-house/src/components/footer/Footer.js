import { useState } from 'react';

import './Footer.css';
// import { Link } from 'react-router-dom';

export const Footer = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);

    // TODO future functionality for sending emails!

    const onChangeHandler = (e) => {
        setEmail(e.target.value);
        setError(false);
    }

    const onBlurHandler = (e) => {
        const validRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;

        if (!e.target.value.match(validRegex) && e.target.value !== '') {
            setError(true);
        }
        
        setEmail('');

        setTimeout(() => {
            setError(false);
        }, 3000)
    }

    const onSubmitHandler = () => {
        const validRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;

        if (!email.match(validRegex)) {
            setError(true);
        }
        
        setEmail('');
        
        setTimeout(() => {
            setError(false);
        }, 3000)
    }

    return (
        <div className='footer'>
            <section className="input">
                <h1>SUBSCRIBE TO OUR NEWSLETTER</h1>
                <p>Sign up for our mailing list to get latest updates and offers.</p>
                {error && (
                    <p className='footer-err-msg'>Invalid E-mail!</p>
                )}
                <div className="inputs">
                    <input type="text" value={email} onChange={onChangeHandler} onBlur={onBlurHandler} placeholder="Email Address.." />
                    <button onClick={onSubmitHandler}>SUBSCRIBE</button>
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