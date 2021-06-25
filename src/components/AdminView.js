import React, { useState } from 'react'

function AdminView( props ) {

    const [newItemName, setNewItemName] = useState("");
    const [newItemPrice, setNewItemPrice] = useState("");


    const addNewItem = () => {
        props.addNewItem(newItemName, newItemPrice);
    }

    const onDeleteDrinkClick = (drinkId) => {
        console.log("clicked delete" + drinkId);
        props.deleteDrink(drinkId);
    }

    return (
        <div>
             <div>
                Add new item
                <div>
                    Name <input type="text" onChange={ (event) => setNewItemName(event.target.value) } />
                </div>
                <div>
                    Price <input type="text" onChange={ (event) => setNewItemPrice(event.target.value) } />
                </div>
                <button onClick= { addNewItem }>Add item</button>
            </div>
            <button onClick={ props.disableAdminMode}>Disable Admin Mode</button>

            <h1>List of drinks</h1>
            { props.drinks.map((drink, index) => 
            <div key={index}>
                <button onClick={() => onDeleteDrinkClick(drink.id)}>X</button> {drink.name}, {drink.price}
            </div>)}
            
        </div>
    )
}

export default AdminView