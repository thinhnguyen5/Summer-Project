import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function CardsLocation() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destination!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                        src='images/img17.jpg'
                        text='THÁI HÀ'
                        label='Coffee Time'
                        path='/location'
                        />
                        <CardItem
                        src='images/img18.jpg'
                        text='NGUYEN VAN LOC'
                        label='Coffee Time'
                        path='/location'
                        />
                        <CardItem
                        src='images/img19.jpg'
                        text='LO DUC'
                        label='Coffee Time'
                        path='/location'
                        />
                        <CardItem
                        src='images/img30.jpg'
                        text='HA DONG'
                        label='Coffee Time'
                        path='/location'
                        />
                        <CardItem
                        src='images/img31.jpg'
                        text='PHAM NGOC THACH'
                        label='Coffee Time'
                        path='/location'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                        src='images/img20.jpg'
                        text='LONG BIEN'
                        label='Coffee Time'
                        path='/location'
                        />
                        <CardItem
                        src='images/img21.jpg'
                        text='VAN PHUC'
                        label='Coffee Time'
                        path='/location'
                        />
                        <CardItem
                        src='images/img22.jpg'
                        text='TRICH SAI'
                        label='Coffee Time'
                        path='/location'
                        />
                        <CardItem
                        src='images/img23.jpg'
                        text='TRUC BACH'
                        label='Coffee Time'
                        path='/location'
                        />
                        <CardItem
                        src='images/img24.jpg'
                        text='LE DUC THO'
                        label='Coffee Time'
                        path='/location'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                        src='images/img25.jpg'
                        text='LY THUONG KIET'
                        label='Coffee Time'
                        path='/location'
                        />
                        <CardItem
                        src='images/img26.jpg'
                        text='QUAN SU'
                        label='Coffee Time'
                        path='/location'
                        />
                        <CardItem
                        src='images/img27.jpg'
                        text='NGUYEN VAN HUYEN'
                        label='Coffee Time'
                        path='/location'
                        />
                        <CardItem
                        src='images/img28.jpg'
                        text='TRAN HUY LIEU'
                        label='Coffee Time'
                        path='/location'
                        />
                        <CardItem
                        src='images/img29.jpg'
                        text='HANG DIEU'
                        label='Coffee Time'
                        path='/location'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                        src='images/img32.jpg'
                        text='NHA THO'
                        label='Coffee Time'
                        path='/location'
                        />
                        <CardItem
                        src='images/img33.jpg'
                        text='THE MANNOR'
                        label='Coffee Time'
                        path='/location'
                        />
                        <CardItem
                        src='images/img34.jpg'
                        text='DUONG LANG'
                        label='Coffee Time'
                        path='/location'
                        />
                        <CardItem
                        src='images/img35.jpg'
                        text='LINH DAM'
                        label='Coffee Time'
                        path='/location'
                        />
                        <CardItem
                        src='images/img36.jpg'
                        text='CAU GO'
                        label='Coffee Time'
                        path='/location'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CardsLocation
