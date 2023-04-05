import { useState } from 'react';

import './Search.css';
import * as listingSerive from '../../services/listingService';
import { SingleSearch } from './SingleSearch/SingleSearch';
export const Search = () => {
    const [searchResult, setSearchResult] = useState([]);
    const [value, setValue] = useState('');
    const [category, setCategory] = useState('');

    const onChangeTypeHandler = (e) => {
        setCategory(e.target.value)
    }

    const onChangeValueHandler = (e) => {
        setValue(e.target.value)
    }

    const resetHandler = () => {
        setCategory('')
        setValue('')
    }

    const searchHandler = async () => {
        const response = await listingSerive.getAll();
        let result = [];
        
        if (response.length > 0 && category === '' && value !== '') {
            response.filter(l => {
                if (l.title.toLowerCase().startsWith(value.toLowerCase())) {
                    result.push(l);
                }
            })
        }

        if (response.length > 0 && category !== '') {
            response.filter(l => {
                if (l.category === category) {
                    result.push(l)
                }
            })
            
            if (result.length > 0 && value !== '') {
                // console.log(result);
                // result.filter(l => !l.title.includes(value))
                let newResult = [];
                result.forEach(l => {
                    if (l.title.toLowerCase().startsWith(value.toLowerCase())) {
                        newResult.push(l);
                    }
                })
                result = newResult;
            }
        }
        if (category === '' && value === '') {
            setSearchResult(response);
            
        } else {
            setSearchResult(result);
        }
    }

    return (
        <div className='search-section'>
            <div>
                <h1 className='search-header'>Search for listing..</h1>
            </div>

            <div className='search-wrapper'>
                <div className='search-wrapper-inputs'>
                    <div className='input-btn-wrapper'>
                        <input onChange={onChangeValueHandler} value={value} name='search' type="text" id='search' className='search' placeholder='Type your search here..' />
                        <button onClick={searchHandler} className='search-btn'>Search</button>
                        <button onClick={resetHandler} className='search-btn'>Reset</button>
                    </div>
                    <select
                        className='select-input'
                        name="category"
                        id="category"
                        value={category}
                        onChange={onChangeTypeHandler}
                    >
                        <option value="">Choose option..</option>
                        <option value="Vehicles">Vehicles</option>
                        <option value="Computers">Computers</option>
                        <option value="Home Appliances">Home Appliances</option>
                        <option value="Others">Others</option>
                    </select>
                </div>
            </div>

            <section className='search-result'>
                {searchResult.length > 0 &&
                    searchResult.map(x => <SingleSearch key={x._id} listing={x} />)
                }
            </section>
        </div>
    )
}