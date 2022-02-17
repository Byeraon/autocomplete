import React from "react";
import style from "./chooseditems.module.css";

export const ChoosedItems = ({ data, deleteAnimal }) => {
  return (
    <div className={style.choosedBlocks}>
      {data.map((el) => (
        <button onClick={() => deleteAnimal(el.name)} key={el.name}>
          {el.name} ×
        </button>
      ))}
    </div>
  );
};
