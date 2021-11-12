import React, { useState } from "react";
import classes from "./TaskItem.module.css";

const TaskItem: React.FC<{ title: string; listItems: string[] }> = (props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <li className={classes["items-container"]}>
      <div
        className={classes["task-item"]}
        onClick={() => setIsActive(!isActive)}
      >
        <div>{props.title}</div>
      </div>
      {isActive && (
        <div className={classes["list-item"]}>
          {props.listItems.map((item) => (
            <p> {item} </p>
          ))}
        </div>
      )}
    </li>
  );
};

export default TaskItem;
