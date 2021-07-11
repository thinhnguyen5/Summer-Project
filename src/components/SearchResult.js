import React from 'react';
import styles from './SearchResult.module.css';

export default function SearchResult(props) {
    return (
        <div className={ styles.product }>
            <div>
                <div className="card"><img src={`./images/${props.img}`}></img></div>
                <div className={ styles.name}>{ props.name }</div>
                <div className={ styles.price}>{ props.price } $</div>
            </div>
        </div>
    )
}