import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SearchResult.module.css';

export default function SearchResult(props) {
    return (
        <div>
            <div className={ styles.card }>
                <img src={`./images/${props.img}`}/>
                <div className="box">
                    <div className="row">
                        <h2>{ props.name }</h2>
                        <span>${ props.price }</span>
                        <p>{ props.description }</p>
                        <p>{ props.nutritioninformation }</p>
                        <p>{ props.size }</p>
                        <p>{ props.calories }</p>
                        <p>{ props.fat }</p>
                        <p>{ props.cholesterol }</p>
                        <p>{ props.carbohydrates }</p>
                        <p>{ props.protein }</p>
                        <p>{ props.caffeine }</p>
                        <p>{ props.ingredients }</p>
                    </div>
                </div>
            </div>
        </div>
    )
}