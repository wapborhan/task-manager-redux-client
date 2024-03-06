import { ArrowRightIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useUpdateStatusMutation } from "../../redux/features/tasks/taskApi";

const TaskCard = ({ task }) => {
  // const dispatch = useDispatch();
  const [updateTask, { data, error }] = useUpdateStatusMutation();

  // console.log(data);
  // console.log(error);

  let updatedStatus;

  if (task?.status === "pending") {
    updatedStatus = "running";
  } else if (task?.status === "running") {
    updatedStatus = "done";
  } else {
    updatedStatus = "archive";
  }

  return (
    <div
      className={` rounded-md p-5  ${
        task?.priority === "high" ? "bg-red-500" : ""
      } ${task?.priority === "medium" ? "bg-yellow-500" : ""} ${
        task?.priority === "low" ? "bg-green-500" : ""
      }`}
    >
      <h1 className={`text-lg font-semibold mb-3 text-white border-b-2`}>
        {task?.title}
      </h1>
      <p className="mb-3">{task?.description}</p>
      <p className="text-sm">Assigned to - {task?.assignedTo}</p>
      <div className="flex justify-between mt-3">
        <p>Deadline: {task?.deadline}</p>
        <div className="flex gap-3">
          <button
            // onClick={() => dispatch(removeTask(task?.id))}
            title="Delete"
          >
            <TrashIcon className="h-5 w-5 text-white hover:text-black" />
          </button>
          <button
            onClick={() =>
              updateTask({ id: task?._id, data: { status: updatedStatus } })
            }
            title="In progress"
          >
            <ArrowRightIcon className="h-5 w-5 text-white hover:text-black" />
          </button>
        </div>
      </div>
    </div>
  );
};
//
export default TaskCard;
