import { useState } from "react";
import styled from "styled-components";

function FilterMenu({ addToFilteredLocations }) {
  const [showFilterMenu, setShowFilterMenu] = useState(false);

  const showFilter = () => {
    setShowFilterMenu(!showFilterMenu);
  };

  const filterOptions = [
    "Alpine Huts",
    "Attractions",
    "Campsites",
    "Caravansites",
    "Castles",
    "Fuelstations",
    "Hotels",
    "Restaurants",
    "Ruins",
    "Themeparks",
    "Waterfalls",
  ];

  return (
    <FilterContainer>
      {showFilterMenu && (
        <ul>
          {filterOptions.map((option, index) => {
            return (
              <li key={index}>
                <input
                  type='radio'
                  name={option}
                  onClick={addToFilteredLocations}
                />
                {option}
              </li>
            );
          })}
        </ul>
      )}
      <button onClick={showFilter}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          enable-background='new 0 0 24 24'
          height='24px'
          viewBox='0 0 24 24'
          width='24px'
          fill='#ffffff'>
          <g>
            <path d='M0,0h24 M24,24H0' fill='none' />
            <path d='M4.25,5.61C6.27,8.2,10,13,10,13v6c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1v-6c0,0,3.72-4.8,5.74-7.39 C20.25,4.95,19.78,4,18.95,4H5.04C4.21,4,3.74,4.95,4.25,5.61z' />
            <path d='M0,0h24v24H0V0z' fill='none' />
          </g>
        </svg>
      </button>
    </FilterContainer>
  );
}

export default FilterMenu;

const FilterContainer = styled.div`
  button {
    box-sizing: content-box;
    position: absolute;
    z-index: 100;
    bottom: 0;
    right: 0;
    margin-right: 1rem;
    margin-bottom: 5rem;
    padding: 0.75rem 0.75rem 0.6rem 0.75rem;
    border: none;
    border-radius: 50%;
    background-color: var(--black);
  }
  ul {
    background-color: var(--black);
    position: absolute;
    z-index: 100;
    bottom: 0;
    right: 0;
    margin-right: 1rem;
    margin-bottom: 8.5rem;
    padding: 0.5rem;
    border-radius: 20px;
  }
  li {
    color: var(--white);
    list-style: none;
    font-size: 1rem;
    margin-top: 1rem;
  }

  input {
    transform: scale(1.5);
    margin-right: 1rem;
  }
`;
