import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, search }) {

  const plantsToDisplay = 
  plants.filter(plant => search === '' || plant.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <ul className="cards">
      {plantsToDisplay.map(plant => <PlantCard key={plant.id} plant={plant}/>)}
    </ul>
  );
}

export default PlantList;
