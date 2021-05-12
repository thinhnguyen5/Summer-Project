import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destination!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                        src='images/img1.jpg'
                        text='Bring the best feeling for customer'
                        label='Coffee Time'
                        path='/menu'
                        />
                         <CardItem
                        src='images/img2.jpg'
                        text='Bring the best feeling for customer'
                        label='Coffee Time'
                        // path='/location'
                        />
                    </ul>
                    <ul className='cards__items'>
                         <CardItem
                        src='images/img3.jpg'
                        text='Bring the best feeling for customer'
                        label='Coffee Time'
                        // path='/location'
                        />
                         <CardItem
                        src='images/img4.jpg'
                        text='Bring the best feeling for customer'
                        label='Coffee Time'
                        // path='/location'
                        />
                         <CardItem
                        src='images/img5.jpg'
                        text='Bring the best feeling for customer'
                        label='Coffee Time'
                        // path='/location'
                        />
                    </ul>
                    <ul className='cards__items'>
                         <CardItem
                        src='images/img6.jpg'
                        text='Bring the best feeling for customer'
                        label='Coffee Time'
                        // path='/location'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards
