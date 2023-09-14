1. The assets folder contains the jpeg image for header.

2. The Cart folder contains the Cart component & the indiviual cartitem component(s). The useContext hook is imported in the Cart.js file to collaborate with the rest of the application, & assigned to CartCtx file. There are handler functions for the removing & aidding to cart, passed to the onRemove & onAdd function pointers. I used CSS modues throughout this project. The Cart items function maps all the items in the cart with the help of the context, with their respective props. The 'hasItems' function is used as a ternary operator for conditionally rendering the button. The cart is wrapped in a modal with some animation & an on close function assigned.
The CartIcon component is imported as an SVG component
The CartItem component displays the respective component properties with props.

3. The Layout folder contains the Header & HeaderCartButton components. The HeaderCartButton uses context from the rest of the app, to display the number of items in the cart with the numberOfCartItems prop. The btnIsHighlighted state uses the useState hook with the value initially set to false, to render the 'bump' css modules class conditionally depending on the number of cart items. The useEffect hook does this and with a clear out function. Anytime the dependencies change, [items], the functions rerun & the timer closes after 300ms.
The numberOfCartItems function reduces the itemsarray to a single value & returns the new amount.
The HeaderCartButton component is inported into the Header component.
The Header component has a candy image which uses some CSS styling to sit behind the description, (z-index 0). It uses the transform properties to be rotated.
The Header component is fixed at the top with the CSS propery, position: fixed, & with a very high z-index.

4. MealItem component uses context, to affect the cart & cart button components. The addtoCartHandler adds a mealItem to be displayed into the cart & this function is passed to the onAddToCart pointer. A list item is then rendered with the respective props of the item.

5. The MealItem form component uses the useRef hook instead of useState, to read the value of the item being added. The AmountIsValid const uses useState for adding items to the cart conditionally. The handleSubmit function (passed to the form) does this.

6. The AvailableCandy maps the list of options onto a card wrapper, with respective props.

7. The Candy.js file has the CandySummary & AvailableCandy components returned.

8. The CandySummary is a header and paragraph description.

9. The Store folder contains the cart-context & CartProvider file components. The Cart Context is where the default context state is initialised, with addItem & removeItem functions.
The CartProvider uses the useReducer hook for managing the states of the app that can change frequently and depend on each other. It features the ADD & REMOVE action type handlers and functions. It 
The add & remove handlers are assigned to ADD & REMOVE action types inside the provider function...

10. The UI folder contains the reusable Card component, the dynamic input component and the Modal. The input component has a label and input field for number of items to add to the cart.
The Modal has a black backdrop with a opacity value so the rest of the application is still seen. The modal itself has a slide animation.