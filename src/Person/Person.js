import React from 'react';
import { setPriority } from 'os';

const person = (props) => {
    return( 
    <div>
    <p onClick={props.click}>I am {props.name} and I'm {props.age} years old.</p>
    <p>{props.children}</p>
    <input onChange={props.change} value={props.name}></input>
    </div>
    )
};

export default person;