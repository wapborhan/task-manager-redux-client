import { useSelector } from "react-redux";
import TaskCard from "../components/tasks/TaskCard";

const Archive = () => {
  const { task } = useSelector((state) => state.taskStore);

  const archiveTasks = task.filter((item) => item.status == "archive");

  return (
    <div className="p-10">
      <div>
        <h1 className="text-xl font-semibold mb-10">Archive board</h1>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-5">
        {archiveTasks?.map((item) => (
          <TaskCard key={item.id} task={item} />
        ))}
      </div>
    </div>
  );
};

export default Archive;
