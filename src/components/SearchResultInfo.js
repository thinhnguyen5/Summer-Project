import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link  } from 'react-router-dom'
 import './SearchResultInfo.css';


const SearchResultInfo = ({ match, history}) => {

    const [menu, setMenu] = useState();

    useEffect(() => {
        axios.get(`http://localhost:4000/menu/${match.params.id}`)
        .then(res => {
            setMenu(res.data);
        })
        .catch(() => history.replace('/not-found'));
    });
    return (
        (!menu) ? null :
        <>
        <div className="card">
             <div className="details">
                 {/* <img src={`./images/${menu.img}`}/>
                 <div className="box">
                     <div className="row">
                         <h2>{ drink.name }</h2>
                         <span>${ drink.price }</span>
                     </div>
                     <p>{ drink.description }</p>
                     <p> <h3> Nutrition Information</h3> { drink.nutritioninformation }</p>
                     <p> Serving Size{ drink.size } fl oz</p>
                     <p> Calories { drink.calories }</p>
                     <p> Total Fat { drink.fat } g</p>
                     <p> Cholesterol { drink.cholesterol } mg</p>
                     <p> Carbohydrates { drink.carbohydrates } g</p>
                     <p> Protein { drink.protein } g</p>
                     <p> Caffeine { drink.caffeine } g</p>
                     <p> <h4>ingredients</h4>{ drink.ingredients }</p>
                     <Link to="/cart" className="cart">
                         Add to cart
                     </Link>
                 </div> */}
             </div>
         </div>
         </>
    )
}

export default SearchResultInfo
