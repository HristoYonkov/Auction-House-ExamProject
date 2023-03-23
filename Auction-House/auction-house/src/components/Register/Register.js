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
                        <p className='err-msg'>Username must be between 2 and 10 characters long!</p>
                    </div>

                    <div className='input-wrapper'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id='email' placeholder='email' />
                        <p className='err-msg'>Invalid E-mail!</p>
                    </div>
                    <div className='input-wrapper'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id='password' placeholder='password' />
                        <p className='err-msg'>Password must be between 3 and 15 character's long!</p>
                    </div>
                    <div className='input-wrapper'>
                        <label htmlFor="repass">Confirm Password</label>
                        <input type="password" name="repass" id='repass' placeholder='confirm-password' />
                        <p className='err-msg'>Password must be between 3 and 15 character's long!</p>
                        <p className='err-msg'>Password's must match!</p>
                    </div>

                    <p>If you have an account go to <Link to="/login">LOGIN</Link> page!</p>

                    <button>Register</button>
                </form>

            </section>
        </>
    );
}