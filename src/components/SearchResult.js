import React from 'react'
import { Link } from 'react-router-dom'
import styles from './SearchResult.module.css';

export default function SearchResult(props) {
    return (
          <div className={ styles.section }>
               <div className={ styles.card }>
                    <div className={ styles.details }>
                        <img src={`./images/${props.img}`}/>
                        <div className={ styles.box }>
                            <div className={ styles.row }>
                                <h2>{ props.name }</h2>
                                <span>${ props.price }</span>
                            </div>
                            <p>{ props.description }</p>
                            <p> <h3> Nutrition Information</h3> { props.nutritioninformation }</p>
                            <p> Serving Size{ props.size } fl oz</p>
                            <p> Calories { props.calories }</p>
                            <p> Total Fat { props.fat } g</p>
                            <p> Cholesterol { props.cholesterol } mg</p>
                            <p> Carbohydrates { props.carbohydrates } g</p>
                            <p> Protein { props.protein } g</p>
                            <p> Caffeine { props.caffeine } g</p>
                            <p> <h4>ingredients</h4>{ props.ingredients }</p>
                            <Link to="/cart" className={ styles.cart }>
                                Add to cart
                            </Link>
                        </div>
                    </div>
                </div>
          </div>   
    )
}

