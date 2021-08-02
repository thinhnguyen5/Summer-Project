import React from 'react';
import SearchResult from './SearchResult';


export default function SearchView(props) {
    return(
        <div>
            <div>
                {
                    props.drinks.map(drink => <SearchResult key={drink.id} {...drink} />)
                }
            </div>
        </div>
    )
}