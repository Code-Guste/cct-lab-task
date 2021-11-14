import React, { useState } from "react";
import classes from "./TaskItem.module.css";
import { ReactComponent as Radio } from "../../assets/radio.svg";
import { CSSTransition } from "react-transition-group";

const TaskItem: React.FC<{
  title: string;
  listItems: string[];
  icon: any;
  onToggle: () => void;
  active: boolean;
}> = (props) => {
  return (
    <li
      className={`${classes["items-container"]} ${
        props.active ? `${classes.active}` : ""
      }`}
      onClick={props.onToggle}
    >
      <div
        className={`${classes["task-item"]} ${
          props.active ? `${classes.active}` : ""
        }`}
      >
        <div className={classes.icon}>{props.icon} </div>
        <h3 className={classes["task-title"]}>{props.title}</h3>
      </div>
      <CSSTransition
        in={props.active}
        timeout={200}
        classNames={{
          enter: classes["alert-enter"],
          enterActive: classes["alert-enter-active"],
          exitActive: classes["alert-exit-active"],
          exit: classes["alert-exit"],
        }}
        mountOnEnter
        unmountOnExit
      >
        <div className={classes["list-item"]}>
          {props.listItems.map((item, index) => (
            <p key={index}>
              <Radio /> <span>{item}</span>
            </p>
          ))}
        </div>
      </CSSTransition>
    </li>
  );
};

export default TaskItem;
