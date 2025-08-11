import React from 'react'
import SearchBar from './SearchBar'
import SearchSuggestions from './SearchSuggestions'
import { GPT_SEARCH_URL } from '../utils/url'


const GPTSearchBar = () => {

    return (
        <div className='bg-black'>
            <div className="fixed w-screen h-screen z-0">
                <img className="w-screen h-full object-cover bg-center " src={GPT_SEARCH_URL}/>
            </div>
            <div>

            </div>
            <SearchBar/>
            <div className='align-middle'>
            <SearchSuggestions/>
            </div>
        </div>
    )
}

export default GPTSearchBar