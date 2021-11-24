import React from "react";
import classes from "./TaskItem.module.css";
import { ReactComponent as Radio } from "../../assets/radio.svg";
import { CSSTransition } from "react-transition-group";

const TaskItem: React.FC<{
  title: string;
  listItems: string[];
  onToggle: () => void;
  active: boolean;
  id: string;
}> = (props) => {
  const nodeRef = React.useRef(null);

  return (
    <li className={classes["items-container"]} onClick={props.onToggle}>
      <div
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
            <p key={index}>
              <Radio /> <span dangerouslySetInnerHTML={{
            __html: item
          }}/> 
            </p>
          ))}
        </div>
      </CSSTransition>
    </li>
  );
};

export default TaskItem;
