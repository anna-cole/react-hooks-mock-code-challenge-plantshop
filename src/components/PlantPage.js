import React, { useEffect, useState }  from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(r => r.json())
    .then(plants => setPlants(plants))
  }, [])

  function submitNewPlant(newPlant) {
    setPlants([...plants, newPlant])
  }

  return (
    <main>
      <NewPlantForm submitNewPlant={submitNewPlant} />
      <Search onChangeText={e => setSearch(e.target.value)} search={search} />
      <PlantList plants={plants} search={search}/>
    </main>
  );
}

export default PlantPage;
