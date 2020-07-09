import React from 'react';
import './index.css'


const api = {
  key: "aa4b7d4b99bfd00eafb6d1fab06567da",
  base : "https://api.openweathermap.org/data/2.5/"
}


function App() {
  return (
    <div className="app">
    <main>
        <div className="search-box">
          <input 
              type="text"
              className="search-bar"
              placeholder="Search..."
          />

        </div>

    </main>
    </div>
  );
}

export default App;
