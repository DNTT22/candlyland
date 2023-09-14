import { useRef, useState } from 'react';
import Input from '../../UI/Input';
import classes from './CandyItemForm.module.css'

const CandyItemForm = props => {

    const [amountIsValid, setAmountIsValid] = useState(true)

    const amountInputRef = useRef();

const handleSubmit = event => {
 event.preventDefault();

 const enteredAmount = amountInputRef.current.value; //setting var for item amount
 const enteredAmountNumber = +enteredAmount; //turning entered amount into  number

if (enteredAmount.trim().length === 0)
{
    setAmountIsValid(false);
    return;
}

props.onAddToCart(enteredAmountNumber) //to forward addToCart function to MealItem component

};

return (
    <form className={classes.form} onSubmit={handleSubmit}>
        <Input
        ref={amountInputRef}
        label='amount'
        input={{
            id: 'amount',
            type: 'number',
            min: '1',
            max: '10',
            step: '1',
            defaultValue: '1',
        }} />
        <button>+ Add</button>
        {!amountIsValid && <p>Invalid amount</p>}
    </form> //if amount isn't valid, <p> renders conditionally

)
}

export default CandyItemForm;