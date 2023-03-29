import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


import { AuthContext } from '../../context/AuthContext';
import { onRegister } from '../../services/authService';

import './Register.css'

export const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        repass: ''
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
        if (e.target.name === 'username' &&
            (e.target.value.length < 2 || e.target.value.length > 10)) {
            setFormValidations(state => ({ ...state, [e.target.name]: true }))

        } else if (e.target.name === 'email') {
            const validRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
            if (!e.target.value.match(validRegex)) {
                setFormValidations(state => ({ ...state, [e.target.name]: true }))
            }

        } else if (e.target.name === 'password' &&
            (e.target.value.length < 6 || e.target.value.length > 15)) {
            setFormValidations(state => ({ ...state, [e.target.name]: true }))

        } else if (e.target.name === 'repass' &&
            formData.password !== e.target.value) {
            setFormValidations(state => ({ ...state, [e.target.name]: true }))
        }
    }

    const navigate = useNavigate();
    const { setUserSession } = useContext(AuthContext);

    const registerHandler = async (e) => {
        e.preventDefault();
        let ifErrors = false;
        if (formData.username === '' ||
            (formData.username.length < 2 || formData.username.length > 10)) {
            setFormValidations(state => ({ ...state, username: true }))
            ifErrors = true;
        }
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
        if (formData.repass === '' || formData.repass !== formData.password) {
            setFormValidations(state => ({ ...state, repass: true }))
            ifErrors = true;
        }
        if (ifErrors) {
            return;
        }

        const response = await onRegister(formData);
        if (response?.message) {
            return setFormValidations({ ...formValidations, serverError: response.message });
        };

        if (response?._id) {
            setUserSession(response);
            navigate('/');
        }
    };

    return (
        <>
            <section className="register">

                <form onSubmit={registerHandler} className='register-form'>
                    <h1>Register</h1>

                    <div className='input-wrapper'>
                        <label htmlFor="username">Username</label>
                        <input
                            type="text" name="username"
                            id='username'
                            placeholder='username'
                            value={formData.username}
                            onChange={onChangeHandler}
                            onBlur={onBlurHandler}
                        />
                        {formValidations.username && (
                            <p className='err-msg'>Username must be between 2 and 10 characters long!</p>
                        )}
                    </div>

                    <div className='input-wrapper'>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id='email'
                            placeholder='email'
                            value={formData.email}
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
                            value={formData.password}
                            onChange={onChangeHandler}
                            onBlur={onBlurHandler}
                        />
                        {formValidations.password && (
                            <p className='err-msg'>Password must be between 6 and 15 character's long!</p>
                        )}
                    </div>

                    <div className='input-wrapper'>
                        <label htmlFor="repass">Confirm Password</label>
                        <input
                            type="password"
                            name="repass"
                            id='repass'
                            placeholder='confirm-password'
                            value={formData.repass}
                            onChange={onChangeHandler}
                            onBlur={onBlurHandler}
                        />
                        {formValidations.repass && (
                            <p className='err-msg'>Password's must match!</p>
                        )}
                    </div>

                    <p>If you have an account go to <Link to="/login">LOGIN</Link> page!</p>

                    <button>Register</button>
                </form>

            </section>
        </>
    );
}