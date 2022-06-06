import React from 'react';

const Search = () => {
    return (
        <div class="input-group mb-3 w-50 mx-auto">
            <input id="search-field" type="text" class="form-control" placeholder="Search your dress here"
                aria-label="Recipient's username" aria-describedby="button-addon2" />
            <button onclick="loadPhones()" class="btn btn-outline-secondary" type="button"
                id="button-addon2">search</button>
        </div>
    );
};

export default Search;