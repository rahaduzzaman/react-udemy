import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    
    const vstyle = [];
    let btnClass = '';

    if(props.showPerson) {
        btnClass = classes.clicked;
    }

    if(props.persons.length <= 2) {
        vstyle.push( classes.red );
    }
    if(props.persons.length <= 1) {
        vstyle.push( classes.bold );
    }

    return(

        <div className={classes.Cockpit}>
            <h1>{ props.appTitle }</h1>
            <p className={vstyle.join(' ')}>This is working</p>
            <button
            className = {btnClass}
            onClick={props.clicked}>Switch name</button>
        </div>
    );
}

export default cockpit;