import { Link } from 'react-router-dom';

import './Login.css'

export const Login = () => {


    return(
        <>
        <section className="login">

            <form className='login-form'>
                <h1>Login</h1>

                <label htmlFor="email">Email</label>
                <input type="text" name="email" id='email' placeholder='email' />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" id='password' placeholder='password' />

                <p>If you don't have an account go to <Link to="/register">REGISTER</Link> page!</p>

                <button>Login</button>
            </form>

        </section>
        </>
    );
}