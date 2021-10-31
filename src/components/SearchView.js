import React from 'react';
import SearchResult from './SearchResult';
import './SearchView.css'
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


export default function SearchView(props) {
    return(
        <div>
            <h1>Menu</h1>
                
                    <div className='wrapper__'>
                        {
                            props.drinks.map(drink => <SearchResult key={drink.id} {...drink} />)
                        }
                    </div>
        </div>
    )
}