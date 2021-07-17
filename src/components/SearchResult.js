import React from 'react'
import { Link } from 'react-router-dom'
import styles from './SearchResult.module.css';

const SearchResult = ({drinks = [] }) => {
    return (
        drinks.map(drink => (
          <div className={ styles.section }>
               <div className={ styles.card }>
                    <div className={ styles.details }>
                        <img src={`./images/${drink.img}`}/>
                        <div className={ styles.box }>
                            <div className={ styles.row }>
                                <h2>{ drink.name }</h2>
                                <span>${ drink.price }</span>
                            </div>
                            <p>{ drink.description }</p>
                            <p> <h3> Nutrition Information</h3> { drink.nutritioninformation }</p>
                            <p> Serving Size{ drink.size } fl oz</p>
                            <p> Calories { drink.calories }</p>
                            <p> Total Fat { drink.fat } g</p>
                            <p> Cholesterol { drink.cholesterol } mg</p>
                            <p> Carbohydrates { drink.carbohydrates } g</p>
                            <p> Protein { drink.protein } g</p>
                            <p> Caffeine { drink.caffeine } g</p>
                            <p> <h4>ingredients</h4>{ drink.ingredients }</p>
                            <Link to="/cart" className={ styles.cart }>
                                Add to cart
                            </Link>
                        </div>
                    </div>
                </div>
          </div>    
        ))
    )
}

export default SearchResult
