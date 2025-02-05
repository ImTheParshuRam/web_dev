import React, {useEffect, useState} from "react";
import data from './data'
import Tours from "./components/Tours";

const App = () => {
  setTimeout(() => {
    console.log('y')
  }, 0);
  console.log("x")
  useEffect(() => {
  
  }, [])
  
  setTimeout(() => {
    console.log('z')
  }, 10);
  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  if(tours.length === 0) {
    return (
        <div className="refresh">
          <h2>No Tours Left</h2>
          <button className="btn-white" onClick={() => setTours(data)}>
            Refresh
          </button>
        </div>
    );
  }

  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  )
};

export default App;
