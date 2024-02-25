import {
  CheckIcon,
  DocumentMagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { updateStatus } from "../../redux/features/tasks/taskSlice";
import { useState } from "react";
import Modal from "../ui/Modal";
import TaskCard from "./TaskCard";

const MyTasks = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTask, setModalTask] = useState(null);
  const { task } = useSelector((state) => state.taskStore);
  // const { user } = useSelector((state) => state.userStore);
  const dispatch = useDispatch();

  const myTask = task.filter(
    (item) => item?.assignedTo === "Borhan Uddin" && item?.status === "pending"
  );

  const handleModalOpen = (id) => {
    const selectedTask = task.find((item) => item.id === id);
    setModalTask(selectedTask);
    setModalOpen(!modalOpen);
  };

  return (
    <div>
      <Modal isOpen={modalOpen} setIsOpen={setModalOpen} title="My Task">
        <TaskCard task={modalTask} />
      </Modal>
      <h1 className="text-xl my-3">My Tasks</h1>
      <div className=" h-[750px] overflow-auto space-y-3">
        {myTask.map((task) => {
          return (
            <>
              <div
                key={task?.id}
                className="bg-secondary/10 rounded-md p-3 flex justify-between"
              >
                <h1>{task?.title}</h1>
                <div className="flex gap-3">
                  <button
                    className="grid place-content-center"
                    onClick={() => handleModalOpen(task.id)}
                    title="Details"
                  >
                    <DocumentMagnifyingGlassIcon className="w-5 h-5 text-primary" />
                  </button>
                  <button
                    className="grid place-content-center"
                    onClick={() =>
                      dispatch(updateStatus({ id: task?.id, status: "done" }))
                    }
                    title="Done"
                  >
                    <CheckIcon className="w-5 h-5 text-primary" />
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default MyTasks;
