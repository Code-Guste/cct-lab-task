import React, { useState } from "react";
import classes from "./TaskItem.module.css";
import { ReactComponent as Radio } from "../../assets/radio.svg";

const TaskItem: React.FC<{ title: string; listItems: string[]; icon: any }> = (
  props
) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <li
      className={classes["items-container"]}
      onClick={() => setIsActive(!isActive)}
    >
      <div className={classes["task-item"]}>
        <div className={classes.icon}>{props.icon} </div>
        <h3 className={classes["task-title"]}>{props.title}</h3>
      </div>
      {isActive && (
        <div className={classes["list-item"]}>
          {props.listItems.map((item) => (
            <p>
              <Radio /> <span>{item}</span>
            </p>
          ))}
        </div>
      )}
    </li>
  );
};

export default TaskItem;
