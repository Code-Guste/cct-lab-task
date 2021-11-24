import TaskItem from "./TaskItem";
import classes from "./TaskItems.module.css";
import { useState } from "react";

const taskData = [
  {
    title: "Build test task",
    listItems: [
      "Create repository",
      "Implement designs",
      "Implement functionality",
    ],
    id: "1",
  },
  {
    title: "Submit your test task",
    listItems: [
      "Open email client",
      'Send link with information to <a href="mailto:careers@cornercasetech.com">careers@cornercasetech.com</a> and wait.',
    ],
    id: "2",
  },
  {
    title: "Participate in tech interview",
    listItems: ["Talk with HR", "Talk with Tech team"],
    id: "3",
  },
  {
    title: "Receive answer",
    listItems: ["Receive answers", "Start your IT career"],
    id: "4",
  },
];

const TaskItems = () => {
  const [clicked, setClicked] = useState<string | null>("");

  const handleToggle = (id: string) => {
    if (clicked === id) {
      return setClicked(null);
    }
    setClicked(id);
  };

  return (
    <ul className={classes["task-items"]}>
      {taskData.map(({ title, listItems, id }) => (
        <TaskItem
          title={title}
          listItems={listItems}
          key={id}
          onToggle={() => handleToggle(id)}
          active={clicked === id}
          id={id}
        />
      ))}
    </ul>
  );
};

export default TaskItems;
