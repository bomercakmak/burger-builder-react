import classes from './Order.module.css'
import React from 'react'
const Order = (props) => {

return(
    <div className={classes.Order}>
        <p>Ingredients: Salad (1)</p>
        <p>Price: <strong>EURO 5.45</strong></p>
    </div>
    )
}

export default Order;