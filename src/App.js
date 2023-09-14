import { useState } from 'react';
import './App.css'
import Header from './Layout/Header';
import Candy, { Candies } from './Candies/Candies';
import Cart from './Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Candies />
      </main>
    </CartProvider>
  );
}

export default App;