import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext';
import { onLogin } from '../../services/authService';

import './Login.css';

export const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [formValidations, setFormValidations] = useState({
        username: false,
        email: false,
        password: false,
        repass: false
    });

    const onChangeHandler = (e) => {
        setFormData(state => ({ ...state, [e.target.name]: e.target.value }));
        setFormValidations(state => ({ ...state, [e.target.name]: false }));
    }

    const onBlurHandler = (e) => {
        if (e.target.name === 'email') {
            const validRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
            if (!e.target.value.match(validRegex)) {
                setFormValidations(state => ({ ...state, [e.target.name]: true }))
            }

        } else if (e.target.name === 'password' &&
            (e.target.value.length < 6 || e.target.value.length > 15)) {
            setFormValidations(state => ({ ...state, [e.target.name]: true }))

        }
    }

    const navigate = useNavigate();
    const { setUserSession, setServerErrors } = useContext(AuthContext);

    const loginHandler = async (e) => {
        e.preventDefault();
        let ifErrors = false;
        if (formData.email === '' || formData.email !== '') {
            const validRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
            if (!formData.email.match(validRegex)) {
                setFormValidations(state => ({ ...state, email: true }))
                ifErrors = true;
            }
        }
        if (formData.password === '' ||
        formData.password.length < 6 ||
        formData.password.length > 15) {
            setFormValidations(state => ({ ...state, password: true }))
            ifErrors = true;
        }
        if (ifErrors) {
            return;
        }
        
        const response = await onLogin(formData);
        if (response?.message) {
            return setServerErrors(response.message);
        };

        if (response?._id) {
            setUserSession(response);
            navigate('/');
        }
    }

    return (
        <>
            <section className="login">

                <form onSubmit={loginHandler} className='login-form'>
                    <h1>Login</h1>

                    <div className='input-wrapper'>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id='email'
                            placeholder='email'
                            value={formData.username}
                            onChange={onChangeHandler}
                            onBlur={onBlurHandler}
                        />
                        {formValidations.email && (
                            <p className='err-msg'>Invalid E-mail!</p>
                        )}
                    </div>

                    <div className='input-wrapper'>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id='password'
                            placeholder='password'
                            value={formData.username}
                            onChange={onChangeHandler}
                            onBlur={onBlurHandler}
                        />
                        {formValidations.password && (
                            <p className='err-msg'>Password must be between 6 and 15 character's long!</p>
                        )}
                    </div>

                    <p>If you don't have an account go to <Link to="/register">REGISTER</Link> page!</p>

                    <button>Login</button>
                </form>

            </section>
        </>
    );
}