import React from 'react';
import '../../App.css';
import data from '../../data/drink.json';
import SearchView from '../SearchView';
import Footer from '../Footer';

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drinks: data.drinks,
            productSearchString: ""
        }
    }

    onSearchFieldChange = (event) => {
        console.log('Keyboard event');
        console.log(event.target.value);
        this.setState({ productSearchString: event.target.value});
    }

    render() 
    {

        return (
            <>
            <input type="text" onChange={this.onSearchFieldChange} value={ this.state.productSearchString}/>
            <SearchView
                 drinks= {this.state.drinks.filter((item => item.name.includes(this.state.productSearchString)))} 
            />
            <Footer/>
            </>
    
        )
    }
}
