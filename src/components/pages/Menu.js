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

            newItemName: "",
            newItemPrice: "",
        }
    }

    onSearchFieldChange = (event) => {
        console.log('Keyboard event');
        console.log(event.target.value);
        this.setState({ productSearchString: event.target.value});
    }

    addNewItem = () => {
        let newItems = [...this.state.drinks];
        newItems.push({
            id: newItems.length + 1,
            name: this.state.newItemName,
            price: this.state.newItemPrice
        });

        this.setState({
            drinks: newItems
        });

    }

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
            output = <AdminView disableAdminMode={() => this.setState({adminModeActive: false})} />;
        }
        


        return (
            <>
                { output }
                <Footer/>
            </>
    
        )
    }
}
