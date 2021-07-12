import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SearchResult.module.css';

export default function SearchResult(props) {
    return (
        <div>
            <div className={ styles.card }>
                <Link to={`/menu/${props.id}`}>
                    <img src={`./images/${props.img}`}/>
                </Link>
                <div className={ styles.content}>
                    <h3>
                        <Link to={`/menu/${props.id}`}>{props.name}</Link>
                    </h3>
                    <span>${ props.price }</span>
                    <p>{ props.description }</p>
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
    )
}