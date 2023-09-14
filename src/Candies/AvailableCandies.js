import Card from '../UI/Card';
import MealItem from './CandyItem/CandyItem';
import classes from './AvailableCandies.module.css';

const CANDY = [
  {
    id: 'c1',
    name: 'Haribos',
    description: 'Starmix, Fangtastics...',
    price: 1.09,
  },
  {
    id: 'c2',
    name: 'Snickers',
    description: 'Craving nuts?',
    price: 0.70,
  },
  {
    id: 'c3',
    name: 'Maltesers',
    description: 'Chocolatey balls of goodness',
    price: 0.50,
  },
  {
    id: 'c4',
    name: 'Skittles',
    description: 'Ranbowy paradise',
    price: 1.05,
  },
  {
    id: 'c5',
    name: 'Galaxy bar',
    description: 'Smooth milk, caramel or Cookie crumble',
    price: 1.20,
  },
  {
    id: 'c6',
    name: 'Kinder',
    description: 'Brown elegance',
    price: 0.85,
  },
];

const AvailableCandies = () => {
  const mealsList = CANDY.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableCandies;