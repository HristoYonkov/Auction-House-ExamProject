

export const Edit = () => {


    return (
        <section className="edit">

            <form className='edit-form'>
                <h1>Register</h1>

                <div className='edit-input-wrapper'>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text" name="username"
                        id='username'
                        placeholder='username'
                        // value={formData.username}
                        // onChange={onChangeHandler}
                        // onBlur={onBlurHandler}
                    />
                    {/* {formValidations.username && (
                        <p className='err-msg'>Username must be between 2 and 10 characters long!</p>
                    )} */}
                </div>

                <div className='edit-input-wrapper'>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id='email'
                        placeholder='email'
                        // value={formData.email}
                        // onChange={onChangeHandler}
                        // onBlur={onBlurHandler}
                    />
                    {/* {formValidations.email && (
                        <p className='err-msg'>Invalid E-mail!</p>
                    )} */}
                </div>

                <div className='edit-input-wrapper'>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id='password'
                        placeholder='password'
                        // value={formData.password}
                        // onChange={onChangeHandler}
                        // onBlur={onBlurHandler}
                    />
                    {/* {formValidations.password && (
                        <p className='err-msg'>Password must be between 6 and 15 character's long!</p>
                    )} */}
                </div>

                <div className='edit-input-wrapper'>
                    <label htmlFor="repass">Confirm Password</label>
                    <input
                        type="password"
                        name="repass"
                        id='repass'
                        placeholder='confirm-password'
                        // value={formData.repass}
                        // onChange={onChangeHandler}
                        // onBlur={onBlurHandler}
                    />
                    {/* {formValidations.repass && (
                        <p className='err-msg'>Password's must match!</p>
                    )} */}
                </div>

                <button>Edit</button>
            </form>

        </section>
    )
}