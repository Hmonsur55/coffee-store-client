import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";

function App() {
  const loadedcoffees = useLoaderData();
  // for deleted and remove instant
  const [coffees, setCoffees] =useState(loadedcoffees)

  return (
    <div className="w-5/6 mx-auto mt-5">
      <h1 className="text-center text-3xl font-bold">Vite + React</h1>
      <div className="text-2xl">Coffee Data {coffees.length}</div>
      <div className="grid md:grid-cols-2 gap-5">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
}

export default App;
