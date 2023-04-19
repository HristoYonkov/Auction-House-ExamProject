import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../context/AuthContext';
import * as listingService from '../services/listingService';

export const useEditCreateForm = (initialValues, isEdit) => {
    const [formData, setFormData] = useState(initialValues);

    const [formValidations, setFormValidations] = useState({
        title: false,
        category: false,
        imageUrl: false,
        price: false,
        description: false,
    });

    const editValues = (values) => {
        setFormData(values);
    }

    const onChangeHandler = (e) => {
        setFormData(state => ({ ...state, [e.target.name]: e.target.value }));
        setFormValidations(state => ({ ...state, [e.target.name]: false }));
    }

    const onBlurHandler = (e) => {
        if (e.target.name === 'title' &&
            (e.target.value.length < 2 || e.target.value.length > 15)) {
            setFormValidations(state => ({ ...state, [e.target.name]: true }))

        } else if (e.target.name === 'category') {
            if (e.target.value === '') {
                setFormValidations(state => ({ ...state, [e.target.name]: true }))
            }

        } else if (e.target.name === 'imageUrl' &&
            !(e.target.value.startsWith('http://') ||
                e.target.value.startsWith('https://'))) {
            setFormValidations(state => ({ ...state, [e.target.name]: true }))

        } else if (e.target.name === 'price' &&
            !(Number(formData.price) && formData.price > 0)) {
            setFormValidations(state => ({ ...state, [e.target.name]: true }))

        } else if (e.target.name === 'description' &&
            (e.target.value.length < 10 || e.target.value.length > 200)) {
            setFormValidations(state => ({ ...state, [e.target.name]: true }))

        }
        if (e.target.name === 'price' && e.target.value.length > 10) {
            setFormValidations(state => ({
                ...state, [e.target.name]: true
            }))
        }
    }

    const navigate = useNavigate();
    const { user, setServerErrors } = useContext(AuthContext);

    const submitHandler = async (e) => {
        e.preventDefault();
        let ifErrors = false;
        if (formData.title === '' ||
            (formData.title.length < 2 || formData.title.length > 25)) {
            setFormValidations(state => ({ ...state, title: true }))
            ifErrors = true;
        }
        if (formData.category === '') {
            setFormValidations(state => ({ ...state, category: true }))
            ifErrors = true;
        }
        if (formData.imageUrl === '' ||
            !(formData.imageUrl.startsWith('http://') ||
                formData.imageUrl.startsWith('https://'))) {
            setFormValidations(state => ({ ...state, imageUrl: true }))
            ifErrors = true;
        }
        if (formData.price === '' ||
            !(Number(formData.price) && formData.price > 0)) {
            setFormValidations(state => ({ ...state, price: true }))
            ifErrors = true;
        }
        if (formData.description === '' ||
            (formData.description.length < 10 || formData.description.length > 200)) {
            setFormValidations(state => ({ ...state, description: true }))
            ifErrors = true;
        }
        if (formData.price.length > 10) {
            setFormValidations(state => ({
                ...state, [e.target.name]: true
            }))
            ifErrors = true;
        }
        // if (e.target.name === 'price' && e.target.value.length > 10) {
        //     console.log(typeof e.target.value);
        //     setFormValidations(state => ({
        //         ...state, [e.target.name]: true
        //     }))
        // }

        if (ifErrors) {
            return;
        }

        if (isEdit) {
            const response = await listingService.editListing(formData, user.accessToken);

            if (response?.message) {
                return setServerErrors(response.message);
            }
            if (response?._id) {
                navigate(`/details/${response._id}`)
            }

        } else {
            const response = await listingService.create(formData, user.accessToken);

            if (response?.message) {
                return setServerErrors(response?.message);

                // return setErrors(state => ({ ...state, ["serverError"]: response.message.split(": ")[2].split(", ")[0] }));
            };

            if (response?._id) {
                navigate(`/my-auctions`);
                // navigate('/catalog');
            }
        }
    }

    return {
        formData,
        formValidations,
        onChangeHandler,
        onBlurHandler,
        submitHandler,
        editValues
    }
}