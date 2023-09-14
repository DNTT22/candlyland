import React, { Fragment } from 'react'
import MealsSummary from './CandiesSummary'
import AvailableCandies from './AvailableCandies'

export const Candies = () => {
  return (
    <Fragment>
        <MealsSummary />
        <AvailableCandies />
    </Fragment>
  )
}

export default Candies;