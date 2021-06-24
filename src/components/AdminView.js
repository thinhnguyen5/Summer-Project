import React from 'react'

function AdminView( props ) {

    const addNewItem = () => {
        console.log('haha');
    }

    return (
        <div>
             <div>
                Add new item
                <div>
                    Name <input type="text" onChange={ (event) => this.setState({ newItemName: event.target.value}) } />
                </div>
                <div>
                    Price <input type="text" onChange={ (event) => this.setState({ newItemPrice: event.target.value}) } />
                </div>
                <button onClick= { addNewItem }>Add item</button>
            </div>
            <button onClick={ props.disableAdminMode}>Disable Admin Mode</button>
            
        </div>
    )
}

export default AdminView
