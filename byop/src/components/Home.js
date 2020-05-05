import React, { useState } from "react";
import Dropdown from "./Dropdown";
import "../Main.css";

export default function Home() {
  const crustArray = ["Thin Crust", "Deep Crust", "Cheese filled crust"];
  const toppingsArray = ["Chicken", "Paneer", "Onion and capsicum"];
  const sauceArray = ["Marinara", "Hummus", "Creamy Bechmei"];
  const cheeseArray = ["Mozarella", "Cheddar", "Parmesan"];

  const [selectedItems, setSelectedItems] = useState({});

  function selected(key, value) {
    //  console.log(`${key}:${value}`)
    const obj = selectedItems;

    setSelectedItems({ ...obj, [key]: value });
  }

  console.log("selected items =>", selectedItems);

  function DisplaySelection({ selectedItems }) {
    //   console.log(Object.keys(selectedItems))
    if (Object.keys(selectedItems).length === 4) {
      return (
        <div className="display-card">
            <h2>Order details</h2>
          <ul>
            {Object.keys(selectedItems).map((key) => (
              <li key={Math.random()}>
                {key} : {selectedItems[key]}
              </li>
            ))}
          </ul>
        </div>
      );
    } else {
      return null;
    }
  }

  return (
    <div className="home">
      <h1>Bake your own Pizza !!!</h1>
      <form>
        <Dropdown label="Crust" options={crustArray} cardfunc={selected} />
        <Dropdown
          label="Toppings"
          options={toppingsArray}
          cardfunc={selected}
        />
        <Dropdown label="Sauce" options={sauceArray} cardfunc={selected} />
        <Dropdown label="Cheese" options={cheeseArray} cardfunc={selected} />
      </form>
      <DisplaySelection selectedItems={selectedItems} />
    </div>
  );
}
