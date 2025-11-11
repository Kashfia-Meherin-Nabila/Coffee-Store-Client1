import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';

const Home = () => {
    const initialCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(initialCoffees);

    return (
        <div>
            <div className="p-12 text-center space-y-4">
                <h1 className="text-6xl">Coffee-Store</h1>
            </div>
            
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {
                    coffees.map(coffee => <CoffeeCard 
                        key={coffee._id} 
                        coffees = {coffees}
                        setCoffees = {setCoffees}
                        coffee={coffee}></CoffeeCard>)
                }
            </div>
            
        </div>
    );
};

export default Home;