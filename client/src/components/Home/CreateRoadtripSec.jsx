import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button";
import Add from "../../assets/addIcon.svg";

export default function CreateRoadtripSec() {
  return (
    <CreateRoadtripSection>
      <h2>Create your next roadtrip</h2>
      <div>
        <h3>1. Give it a name</h3>
        <p>
          Choose a name for your plans. Maybe it contains a hint for the
          duration like 'weekend'. Be creative!
        </p>
      </div>
      <div>
        <h3>2. Add locations</h3>
        <p>
          Discover locations in the area you are heading to. Get excited while
          planning the Roadtrip. Did you find anything new on your researches?
          Add the location and share it with the rest of the world.
        </p>
      </div>
      <div>
        <h3>3. Save your trip</h3>
        <p>
          Don't forget to click on save. Even if you are not done with planning
          you should save the current status.
        </p>
      </div>
      <NavLink to={`/map`}>
        <Button data-testid='createNewRoadtrip'>
          <h3>START</h3>
        </Button>
      </NavLink>
    </CreateRoadtripSection>
  );
}

const CreateRoadtripSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  h2 {
    font-size: 1.5rem;
    padding: 1.5rem;
    margin: 2rem;
  }
  h3 {
    padding-top: 1rem;
  }
  a {
    padding: 1rem;
  }

  button {
    padding: 0rem 2rem 1rem;
    border-radius: 15px;
    margin: 3rem;
    color: orange;

    :hover {
      opacity: 100%;
    }
  }

  @media (min-width: 1024px) {
    padding: 0;
    h2 {
      padding: 5rem;
      font-size: 3rem;
    }

    h3 {
      font-size: 2rem;
    }

    div {
      align-self: start;
      width: 45%;
      padding: 2rem 6rem;
      background-color: var(--primary);
      color: var(--tertiary);
      margin-bottom: 2rem;

      :last-of-type {
        align-self: start;
      }
    }

    div + div {
      align-self: end;
    }
    button {
      padding: 1rem 5rem 2rem;
      border-radius: 15px;
      margin: 3rem;
      color: orange;

      :hover {
        opacity: 100%;
      }
    }
  }
`;
