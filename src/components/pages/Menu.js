import React from 'react';
import '../../App.css';
import data from '../../data/drink.json';
import SearchView from '../SearchView';
import Footer from '../Footer';
import AdminView from '../AdminView';

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drinks: data.drinks,
            productSearchString: "",
            adminModeActive: false,
        }
    }

    onSearchFieldChange = (event) => {
        console.log('Keyboard event');
        console.log(event.target.value);
        this.setState({ productSearchString: event.target.value});
    }

    addNewItem = (name, price) => {
        let newItems = [...this.state.drinks];
        newItems.push({
            id: newItems.length + 1,
            name: name,
            price: price
        });

        this.setState({
            drinks: newItems
        });

    }

    deleteDrink = drinkId => this.setState({drinks: this.state.drinks.filter(drink => drink.id !== drinkId)})

    render() 
    {
        let output = 
            <>
                    <div>
                        Search <input type="text" onChange={this.onSearchFieldChange} value={ this.state.productSearchString}/>
                    </div>
                    <SearchView
                        drinks= {this.state.drinks.filter((item) => item.name.includes(this.state.productSearchString)) } 
                    />;
                    <button onClick={ () => this.setState({adminModeActive: !this.state.adminModeActive})}>Admin mode</button>
            </>

        if(this.state.adminModeActive) {
            output = <AdminView
                        disableAdminMode={() => this.setState({adminModeActive: false})} 
                        addNewItem={ this.addNewItem }
                        drinks={ this.state.drinks }
                        deleteDrink={ this.deleteDrink }
                    />;
        }
        


        return (
            <>
                { output }
                <Footer/>
            </>
    
        )
    }
}
