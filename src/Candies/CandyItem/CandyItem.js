import { useContext } from 'react';
import CandyItemForm from './CandyItemForm';
import classes from './CandyItem.module.css';
import CartContext from '../../store/cart-context';

const CandyItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `£${props.price.toFixed(2)}`;

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    });
  };

  return (
    <li className={classes.candy}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <CandyItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default CandyItem;