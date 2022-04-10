import React from "react";
import './index.css';

const SearchBox =({searchBox})=> {
    return(
        <div className = " ma3">
             <input 
             className='pa3 yale white' 
             type='search' 
             placeholder='Search Robots' 
             onChange={searchBox}
             />
        </div>
       
    );
}

export default SearchBox;