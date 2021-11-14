import TaskItem from "./TaskItem";
import { ReactComponent as NumberThree } from "../../assets/number-3-icon.svg";
import { ReactComponent as NumberTwo } from "../../assets/number-2-icon.svg";
import { ReactComponent as NumberFour } from "../../assets/number-4-icon.svg";
import { ReactComponent as NumberOne } from "../../assets/number-1-icon.svg";
import classes from "./TaskItems.module.css";

const TaskItems = () => {
  const taskData = [
    {
      title: "Build test task",
      listItems: [
        "Create repository",
        "Implement designs",
        "Implement functionality",
      ],
      icon: <NumberOne />,
      id: "1",
    },
    {
      title: "Submit your test task",
      listItems: [
        "Open email client",
        "Send link with information to careers@cornercasetech.com",
      ],
      icon: <NumberTwo />,
      id: "2",
    },
    {
      title: "Participate in tech interview",
      listItems: ["Talk with HR", "Talk with Tech team"],
      icon: <NumberThree />,
      id: "3",
    },
    {
      title: "Receive answer",
      listItems: ["Receive answers", "Start your IT career"],
      icon: <NumberFour />,
      id: "4",
    },
  ];

  return (
    <ul className={classes["task-items"]}>
      {taskData.map(({ title, listItems, icon, id }) => (
        <TaskItem
          title={title}
          listItems={listItems}
          icon={icon}
          key={id}
        ></TaskItem>
      ))}
    </ul>
  );
};

export default TaskItems;
