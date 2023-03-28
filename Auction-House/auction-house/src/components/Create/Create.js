import './Create.css'

export const Create = () => {


    return (
        <section className="create">

            <form className='create-form'>
                <h1>Add New-Auction</h1>

                <div className='create-input-wrapper'>
                    <label htmlFor="username">Title</label>
                    <input
                        type="text" name="title"
                        id='title'
                        placeholder='title'
                    // value={formData.username}
                    // onChange={onChangeHandler}
                    // onBlur={onBlurHandler}
                    />
                    {/* {formValidations.username && (
                        <p className='err-msg'>Username must be between 2 and 10 characters long!</p>
                    )} */}
                </div>

                <div className='create-input-wrapper'>
                    <label htmlFor="category">Category</label>
                    <select
                        name="category"
                        id="category"
                    // value={formData.email}
                    // onChange={onChangeHandler}
                    // onBlur={onBlurHandler}
                    >
                        <option value="vehicles">Vehicles</option>
                        <option value="computers">Computers</option>
                        <option value="appliances">Appliances</option>
                    </select>
                </div>

                <div className='create-input-wrapper'>
                    <label htmlFor="imageUrl">ImageUrl</label>
                    <input
                        type="text"
                        name="imgeUrl"
                        id='imgeUrl'
                        placeholder='http:// or https://'
                        // value={formData.password}
                        // onChange={onChangeHandler}
                        // onBlur={onBlurHandler}
                    />
                    {/* {formValidations.password && (
                        <p className='err-msg'>Password must be between 6 and 15 character's long!</p>
                    )} */}
                </div>

                <div className='create-input-wrapper'>
                    <label htmlFor="price">Starting Price</label>
                    <input
                        type="number"
                        name="price"
                        id='price'
                        placeholder='Price must be positive number!'
                    // value={formData.repass}
                    // onChange={onChangeHandler}
                    // onBlur={onBlurHandler}
                    />
                    {/* {formValidations.repass && (
                        <p className='err-msg'>Password's must match!</p>
                    )} */}
                </div>

                <div className='create-input-wrapper'>
                    <label htmlFor="description">Description</label>
                    <textarea
                        name="description"
                        id="description"
                        cols="30" rows="10"
                    // value={formData.repass}
                    // onChange={onChangeHandler}
                    // onBlur={onBlurHandler}
                    ></textarea>

                    {/* {formValidations.repass && (
                        <p className='err-msg'>Password's must match!</p>
                    )} */}
                </div>

                <button>Create</button>
            </form>

        </section>
    )
}