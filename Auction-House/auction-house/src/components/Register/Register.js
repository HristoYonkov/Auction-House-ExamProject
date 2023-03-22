import { Link } from 'react-router-dom';

import './Register.css'

export const Register = () => {


    return (
        <>
            <section className="register">

                <form className='register-form'>
                    <h1>Register</h1>

                    <div className='input-wrapper'>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id='username' placeholder='username' />
                    </div>

                    <div className='input-wrapper'>
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id='email' placeholder='email' />
                    </div>
                    <div className='input-wrapper'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id='password' placeholder='password' />
                    </div>
                    <div className='input-wrapper'>
                        <label htmlFor="repass">Confirm Password</label>
                        <input type="password" name="repass" id='repass' placeholder='confirm password' />
                    </div>

                    <p>If you have an account go to <Link to="/login">LOGIN</Link> page!</p>

                    <button>Register</button>
                </form>

            </section>
        </>
    );
}