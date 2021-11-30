import React, { useState } from "react";
import classes from "./TaskItem.module.css";
import { ReactComponent as Checked } from "../../assets/checked.svg";
import { ReactComponent as Unchecked } from "../../assets/unchecked.svg";
import { CSSTransition } from "react-transition-group";

const TaskItem: React.FC<{
  title: string;
  listItems: string[];
  onToggle: () => void;
  active: boolean;
  id: string;
}> = (props) => {
  const nodeRef = React.useRef(null);

  const [checkedState, setCheckedState] = useState(
    new Array(props.listItems.length).fill(false)
  );

  const toggleCheckbox = (position: number) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };

  return (
    <li className={classes["items-container"]}>
      <div
        onClick={props.onToggle}
        className={`${classes["task-item"]} ${
          props.active ? `${classes.active}` : ""
        }`}
      >
        <div className={classes["task-number"]}>{props.id}</div>
        <h3 className={classes["task-title"]}>{props.title}</h3>
      </div>
      <CSSTransition
        nodeRef={nodeRef}
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
        <div className={classes["list-item"]} ref={nodeRef}>
          {props.listItems.map((item, index) => (
            <p key={index} onClick={() => toggleCheckbox(index)}>
              {checkedState[index] === false ? <Unchecked /> : <Checked />}
              <span
                dangerouslySetInnerHTML={{
                  __html: item,
                }}
              />
            </p>
          ))}
        </div>
      </CSSTransition>
    </li>
  );
};

export default TaskItem;
