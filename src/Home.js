import React, { Component } from 'react';
import './Home.css';

const categories1 = ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Dessert']
const categories2 = ['Fish', 'Chicken', 'Pork', 'Beef']
const categories3 = ['Potatoes', 'Pasta', 'Rice', 'Bread']
const categories4 = ['Eggs', 'Tomatoes', 'Beans', 'Greens']

function Button(category) {
  return <button className="category-button">{category}</button>
}


class Home extends Component {
  render() {
    return (
      <section>
        <h3> Time of day </h3>
        {categories1.map(Button)}

        <h3> Protein </h3>
        {categories2.map(Button)}

        <h3> Carbs </h3>
        {categories3.map(Button)}

        <h3> Everything Else </h3>
        {categories4.map(Button)}
      </section>
    );
  }
}


export default Home;