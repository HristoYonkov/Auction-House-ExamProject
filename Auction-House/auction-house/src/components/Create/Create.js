// import { useContext, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

import './Create.css';
// import { AuthContext } from '../../context/AuthContext';
// import * as listingService from '../../services/listingService';
import { useEditCreateForm } from '../../hooks/useEditCreateForm';

export const Create = () => {
    // const [formData, setFormData] = useState({
    //     title: '',
    //     category: '',
    //     imageUrl: '',
    //     price: '',
    //     description: '',
    // });

    // const [formValidations, setFormValidations] = useState({
    //     title: false,
    //     category: false,
    //     imageUrl: false,
    //     price: false,
    //     description: false,
    // });

    // const onChangeHandler = (e) => {
    //     setFormData(state => ({ ...state, [e.target.name]: e.target.value }));
    //     setFormValidations(state => ({ ...state, [e.target.name]: false }));
    // }

    // const onBlurHandler = (e) => {
    //     if (e.target.name === 'title' &&
    //         (e.target.value.length < 2 || e.target.value.length > 25)) {
    //         setFormValidations(state => ({ ...state, [e.target.name]: true }))

    //     } else if (e.target.name === 'category') {
    //         if (e.target.value === '') {
    //             setFormValidations(state => ({ ...state, [e.target.name]: true }))
    //         }

    //     } else if (e.target.name === 'imageUrl' &&
    //         !(e.target.value.startsWith('http://') ||
    //             e.target.value.startsWith('https://'))) {
    //         setFormValidations(state => ({ ...state, [e.target.name]: true }))

    //     } else if (e.target.name === 'price' &&
    //         !(Number(formData.price) && formData.price > 0)) {
    //         setFormValidations(state => ({ ...state, [e.target.name]: true }))
            
    //     } else if (e.target.name === 'description' &&
    //         (e.target.value.length < 10 || e.target.value.length > 200)) {
    //         setFormValidations(state => ({ ...state, [e.target.name]: true }))

    //     } 
    //     if (e.target.name === 'price' && e.target.value.length > 10) {
    //         setFormValidations(state => ({
    //             ...state, [e.target.name]: true
    //         }))
    //     }
    // }

    // const navigate = useNavigate();
    // const { user, setServerErrors } = useContext(AuthContext);

    // const submitHandler = async (e) => {
    //     e.preventDefault();
    //     let ifErrors = false;
    //     if (formData.title === '' ||
    //         (formData.title.length < 2 || formData.title.length > 25)) {
    //         setFormValidations(state => ({ ...state, title: true }))
    //         ifErrors = true;
    //     }
    //     if (formData.category === '') {
    //         setFormValidations(state => ({ ...state, category: true }))
    //         ifErrors = true;
    //     }
    //     if (formData.imageUrl === '' ||
    //         !(formData.imageUrl.startsWith('http://') ||
    //             formData.imageUrl.startsWith('https://'))) {
    //         setFormValidations(state => ({ ...state, imageUrl: true }))
    //         ifErrors = true;
    //     }
    //     if (formData.price === '' ||
    //         !(Number(formData.price) && formData.price > 0)) {
    //         setFormValidations(state => ({ ...state, price: true }))
    //         ifErrors = true;
    //     }
    //     if (formData.description === '' ||
    //         (formData.description.length < 10 || formData.description.length > 200)) {
    //         setFormValidations(state => ({ ...state, description: true }))
    //         ifErrors = true;
    //     }
    //     if (formData.price.length > 10) {
    //         setFormValidations(state => ({
    //             ...state, [e.target.name]: true
    //         }))
    //         ifErrors = true;
    //     }
    //     // if (e.target.name === 'price' && e.target.value.length > 10) {
    //     //     console.log(typeof e.target.value);
    //     //     setFormValidations(state => ({
    //     //         ...state, [e.target.name]: true
    //     //     }))
    //     // }

    //     if (ifErrors) {
    //         return;
    //     }

    //     const response = await listingService.create(formData, user.accessToken);

    //     if (response?.message) {
    //         return setServerErrors(response?.message);

    //         // return setErrors(state => ({ ...state, ["serverError"]: response.message.split(": ")[2].split(", ")[0] }));
    //     };

    //     if (response?._id) {
    //         navigate(`/my-auctions`);
    //         // navigate('/catalog');
    //     }
    // }

    const isEdit = false;

    const {
        formData,
        formValidations,
        onChangeHandler,
        onBlurHandler,
        submitHandler
    } = useEditCreateForm({
        title: '',
        category: '',
        imageUrl: '',
        price: '',
        description: '',
    }, isEdit);

    return (
        <section className="create">

            <form onSubmit={submitHandler} className='create-form'>
                <h1>Add New Auction</h1>

                <div className='create-input-wrapper'>
                    <label htmlFor="username">Title</label>
                    <input
                        type="text"
                        name="title"
                        id='title'
                        placeholder='title'
                        value={formData.title}
                        onChange={onChangeHandler}
                        onBlur={onBlurHandler}
                    />
                    {formValidations.title && (
                        <p className='err-msg'>Title must be between 2 and 15 characters long!</p>
                    )}
                </div>

                <div className='create-input-wrapper'>
                    <label htmlFor="category">Category</label>
                    <select
                        name="category"
                        id="category"
                        value={formData.category}
                        onChange={onChangeHandler}
                        onBlur={onBlurHandler}
                    >
                        <option value="">Choose option..</option>
                        <option value="Vehicles">Vehicles</option>
                        <option value="Computers">Computers</option>
                        <option value="Home Appliances">Home Appliances</option>
                        <option value="Others">Others</option>
                    </select>
                    {formValidations.category && (
                        <p className='err-msg'>You must choose an option!</p>
                    )}
                </div>

                <div className='create-input-wrapper'>
                    <label htmlFor="imageUrl">ImageUrl</label>
                    <input
                        type="text"
                        name="imageUrl"
                        id='imageUrl'
                        placeholder='http:// or https://'
                        value={formData.imageUrl}
                        onChange={onChangeHandler}
                        onBlur={onBlurHandler}
                    />
                    {formValidations.imageUrl && (
                        <p className='err-msg'>ImageUrl should start with http:// or https://!</p>
                    )}
                </div>

                <div className='create-input-wrapper'>
                    <label htmlFor="price">Starting Price</label>
                    <input
                        type="number"
                        name="price"
                        id='price'
                        placeholder='Price must be positive number!'
                        value={formData.price}
                        onChange={onChangeHandler}
                        onBlur={onBlurHandler}
                    />
                    {formValidations.price && formData.price.length <= 10 && (
                        <p className='err-msg'>Price should be a positive number!</p>
                    )}
                    {formValidations.price && formData.price.length > 10 && (
                        <p className='err-msg'>Price should be no longer than 10 characters!</p>
                    )}
                </div>

                <div className='create-input-wrapper'>
                    <label htmlFor="description">Description</label>
                    <textarea
                        name="description"
                        id="description"
                        cols="30" rows="10"
                        value={formData.description}
                        onChange={onChangeHandler}
                        onBlur={onBlurHandler}
                    ></textarea>

                    {formValidations.description && (
                        <p className='err-msg'>Field must be between 10 and 15 characters!</p>
                    )}
                </div>

                <button>Create</button>
            </form>

        </section>
    )
}