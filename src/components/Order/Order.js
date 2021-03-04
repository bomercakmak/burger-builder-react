import classes from './Order.module.css'
import React from 'react'
const Order = (props) => {

    const ingredients = [];
    const address = []

    for (let ingredientName in props.ingredients) {
        ingredients.push({
            name:ingredientName,
            amount: props.ingredients[ingredientName]
        })
    }
    for (let addressName in props.address) {
        address.push({
            name:addressName,
            amount: props.address[addressName]
        })
    }

    const ingredientOutput = ingredients.map(ig=>{
        return <span 
        style={{textTransform:'capitalize',
                display: 'inline-block',
                margin: '0 8px',
                border: '1px solid #ccc',
                padding:'5px'}}
        key={ig.name}>  {ig.name} ({ig.amount})</span>
    })
    const addressOutput = address.map(ig=>{
        return <span 
        style={{textTransform:'capitalize',
                display: 'inline-block',
                margin: '0 8px',
                border: '1px solid #ccc',
                padding:'5px'}}
        key={ig.name}>  {ig.name} ({ig.amount})</span>
    })

return(

    <div className={classes.Order}>
        <p>Ingredients: {ingredientOutput}</p>
        <p>Address: {addressOutput}</p>
        <p>Price: <strong> {Number.parseFloat(props.price).toFixed(2)} €</strong></p>
    </div>
    )
}

export default Order;