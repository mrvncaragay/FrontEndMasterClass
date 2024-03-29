import React, { useState, useEffect } from 'react';
import pet, { ANIMALS } from '@frontendmasters/pet';

// Custom Hook
import useDropDown from './useDropDown';

const SearchParams = () => {
  const [location, setLocation] = useState('Seattle, WA');
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropDown] = useDropDown('Animal', 'dog', ANIMALS);
  const [breed, BreedDropDown] = useDropDown('Breed', '', breeds);

  useEffect(() => {
    pet.breeds('dogs').then(console.log(), console.log())
  });

  return (
    <div className="search-params">
      <h1>{location}</h1>
      <form action="">
        <label htmlFor="location">
          location
          <input
            id="location"
            type="text"
            value={location}
            placeholder="Location"
            onChange={e => setLocation(e.target.value)}
          />
        </label>

        <AnimalDropDown />
        <BreedDropDown />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
