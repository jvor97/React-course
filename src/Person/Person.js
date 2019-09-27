import React from 'react';
import { setPriority } from 'os';

const person = (props) => {

    const style = {

        width: '60%', 
        padding: '16px', 
        textAlign: 'center',
        margin: '16px', 
        marginLeft: 'auto',
        marginRight: 'auto',
        border: '1px solid black'
    }
    return( 
    <div style={style}>
    <p onClick={props.click}>I am {props.name} and I'm {props.age} years old.</p>
    <p>{props.children}</p>
    <input onChange={props.change} value={props.name}></input>
    </div>
    )
};

export default person;