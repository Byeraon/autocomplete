import "./App.css";
import { AutoComplete } from "./components/autocomplete/autocomplete";
import { useEffect, useState } from "react";
import { ChoosedItems } from "./components/chooseditems/chooseditems";

function App() {
  const [data, setData] = useState([
    {
      name: "Francesca Preston",
      age: 8,
      type: "cat",
      gender: "female",
      breed: true,
      features: ["white", "kind"],
    },
    {
      name: "Reva Sparks",
      age: 6,
      type: "cat",
      gender: "female",
      breed: true,
      features: ["multicolor", "neutral"],
    },
    {
      name: "Barton Decker",
      age: 1,
      type: "dog",
      gender: "male",
      breed: true,
      features: ["black", "evil"],
    },
    {
      name: "Byers Wiggins",
      age: 12,
      type: "cat",
      gender: "male",
      breed: true,
      features: ["multicolor", "evil"],
    },
    {
      name: "Duke Chavez",
      age: 5,
      type: "dog",
      gender: "male",
      breed: false,
      features: ["multicolor", "kind"],
    },
    {
      name: "Silvia Sears",
      age: 13,
      type: "cat",
      gender: "female",
      breed: false,
      features: ["multicolor", "neutral"],
    },
    {
      name: "Noreen Lamb",
      age: 11,
      type: "dog",
      gender: "female",
      breed: false,
      features: ["black", "neutral"],
    },
    {
      name: "Williams Fry",
      age: 11,
      type: "cat",
      gender: "male",
      breed: true,
      features: ["black", "neutral"],
    },
    {
      name: "Hobbs West",
      age: 2,
      type: "cat",
      gender: "male",
      breed: true,
      features: ["multicolor", "evil"],
    },
    {
      name: "Farrell Walton",
      age: 4,
      type: "dog",
      gender: "male",
      breed: true,
      features: ["white", "neutral"],
    },
    {
      name: "Gilda Allen",
      age: 12,
      type: "dog",
      gender: "female",
      breed: true,
      features: ["multicolor", "evil"],
    },
    {
      name: "Mariana Jacobs",
      age: 5,
      type: "dog",
      gender: "female",
      breed: true,
      features: ["black", "neutral"],
    },
    {
      name: "Hamilton Buchanan",
      age: 13,
      type: "dog",
      gender: "male",
      breed: true,
      features: ["white", "kind"],
    },
    {
      name: "Stein Flynn",
      age: 2,
      type: "cat",
      gender: "male",
      breed: true,
      features: ["white", "neutral"],
    },
    {
      name: "Elisa Lawrence",
      age: 15,
      type: "cat",
      gender: "female",
      breed: false,
      features: ["black", "kind"],
    },
    {
      name: "Dianna Larsen",
      age: 14,
      type: "cat",
      gender: "female",
      breed: false,
      features: ["black", "neutral"],
    },
  ]);

  useEffect(() => {
    setData((prevstate) => prevstate.map((el) => ({ ...el, choosed: false })));
  }, []);

  const addAnimal = (name) => {
    setData((prevstate) => {
      return prevstate.map((el) =>
        name === el.name ? { ...el, choosed: true } : el
      );
    });
  };

  const deleteAnimal = (name) => {
    setData((prevstate) => {
      return prevstate.map((el) =>
        name === el.name ? { ...el, choosed: false } : el
      );
    });
  };

  return (
    <div className="App">
      <div className="autocomplete">
        <AutoComplete
          addAnimal={addAnimal}
          data={data.filter((el) => !el.choosed)}
        />
        {data.filter((el) => el.choosed).length > 0 && (
          <ChoosedItems
            deleteAnimal={deleteAnimal}
            data={data.filter((el) => el.choosed)}
          />
        )}
      </div>
    </div>
  );
}

export default App;
