import React from 'react';
import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => { //forwardref for automatically passing ref through component to a child component
  return (
    <div className={classes.input}>
    <label htmlFor={props.input.id}>{props.label}</label>
    <input ref={ref} {...props.input} />
    </div> //spread operator ensures inputs recieve all same props & values as label?
  );
});

export default Input;