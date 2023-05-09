
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';

function App() {
  const coffeeData = useLoaderData();

  return (
    <div className="w-5/6 mx-auto mt-5">
      <h1 className="text-center text-3xl font-bold">Vite + React</h1>
      <div className="text-2xl">Coffee Data {coffeeData.length}</div>
      <div className='grid md:grid-cols-2 gap-5'>
        {coffeeData.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
        ))}
      </div>
    </div>
  );
}

export default App
