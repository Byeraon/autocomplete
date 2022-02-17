import React, { useRef, useState } from "react";
import style from "./autocomplete.module.css";

export const AutoComplete = ({ data, addAnimal }) => {
  const [currentValue, setValue] = useState("");
  const [focused, setFocus] = useState(false);
  const inputRef = useRef();

  return (
    <div
      onFocus={() => {
        setFocus(true);
      }}
      onBlur={() => {
        setFocus(false);
      }}
      className={style.inputBlock}
    >
      <input
        ref={inputRef}
        className={style.input}
        onChange={(event) => {
          setValue(event.target.value);
        }}
        value={currentValue}
      ></input>

      <div
        style={focused ? { maxHeight: "200px" } : {}}
        className={style.choosingList}
      >
        {data
          .filter((el) =>
            (el.name + el.type + el.features.join(""))
              .toUpperCase()
              .includes(currentValue.toUpperCase())
          )
          .map((el, id) => (
            <button
              onClick={() => {
                addAnimal(el.name);
                inputRef.current.focus();
              }}
              key={el.name + id}
              style={id !== 0 ? { borderTop: "2px solid gray" } : {}}
            >
              {el.name} - {el.type} - {el.features.join(", ")}
            </button>
          ))}
      </div>
    </div>
  );
};
