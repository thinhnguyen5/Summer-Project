import React from 'react';
import '../../App.css';
import SearchView from '../SearchView';
import Footer from '../Footer';
import { Button } from '../Button';
import '../SearchResult.module.css'
import axios from 'axios';

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drinks: [],
            productSearchString: "",
        }
        console.log("constructor")
    }

    componentDidMount() {
        axios.get('http://localhost:4000/menu').then(result => {
            this.setState({ drinks: result.data.menu });
        })
        .catch(err =>console.log(err));
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
                <input className="input" type="text" placeholder="Find your favorite drink ^^" onChange={this.onSearchFieldChange} value={ this.state.productSearchString}/>
                 
                <SearchView
                    drinks= {this.state.drinks.filter((item) => item.name.includes(this.state.productSearchString)) } 
                />
                <Footer/>
            </>
    
        )
    }
}
