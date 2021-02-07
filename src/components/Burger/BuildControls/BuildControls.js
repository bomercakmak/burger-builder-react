import React from 'react';
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label: 'Salad',type:'salad'},
    {label: 'Tomato',type:'tomato'},
    {label: 'Cheese',type:'cheese'},
    {label: 'Meat',type:'meat'}
]

const BuildControls = (props) => (
    <div className={classes.BuildControls}>
        {controls.map(ctrl=>(
            <BuildControl 
            key={ctrl.label} 
            label={ctrl.label}
            added={()=>props.ingredientAdded(ctrl.type)}
            removed={()=>props.ingredientRemoved(ctrl.type)}
            disabled={props.disabled[ctrl.type]}
            />
        ))}
    </div>
);


export default BuildControls;