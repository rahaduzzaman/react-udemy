import React from 'react';
import classes from './Person.css';

const person = (props) => {

    const style = {
    
    }

    return (
        <div className={classes.personBlock} style={style}>
            <p onClick={props.click}>I am {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name} />
        </div>
    )
};

export default person;