import { ArrowRightIcon, TrashIcon } from "@heroicons/react/24/outline";
import {
  useDeleteTaskMutation,
  useUpdateStatusMutation,
} from "../../redux/features/tasks/taskApi";
import moment from "moment";

const TaskCard = ({ task }) => {
  // const dispatch = useDispatch();
  const [updateTask, { data, error }] = useUpdateStatusMutation();
  const [deletePost] = useDeleteTaskMutation();

  // console.log(isDeleting);

  const handleTaskDelete = (id) => {
    let text = "\n\nAre you confirm to delete?\n\n";
    if (confirm(text) == true) {
      deletePost(id);
    } else {
      text = "You canceled!";
    }
  };

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
        <p>Deadline: {moment(task?.deadline).fromNow()}</p>
        <div className="flex gap-3">
          <button onClick={() => handleTaskDelete(task?._id)} title="Delete">
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
