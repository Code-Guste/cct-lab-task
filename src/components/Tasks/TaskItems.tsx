import TaskItem from "./TaskItem";
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
    },
    {
      title: "Submit your test task",
      listItems: [
        "Open email client",
        "Send link with information to careers@cornercasetech.com",
      ],
    },
    {
      title: "Participate in tech interview",
      listItems: ["Talk with HR", "Talk with Tech team"],
    },
    {
      title: "Receive answer",
      listItems: ["Receive answers", "Start your IT career"],
    },
  ];

  return (
    <div>
      <h1 className={classes.heading}>CCT Lab Process</h1>
      <ul className={classes["task-items"]}>
        {taskData.map(({ title, listItems }) => (
          <TaskItem title={title} listItems={listItems} />
        ))}
      </ul>
    </div>
  );
};

export default TaskItems;
