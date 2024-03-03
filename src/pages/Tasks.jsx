import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import MyTasks from "../components/tasks/MyTasks";
import TaskCard from "../components/tasks/TaskCard";
import { useState } from "react";
import Modal from "../components/ui/Modal";
import AdTaskForm from "../components/tasks/AdTaskForm";
import { useSelector } from "react-redux";
import MenuDropdown from "../components/ui/MenuDropdown";

const Tasks = () => {
  let [isOpen, setIsOpen] = useState(false);
  const { task } = useSelector((state) => state.taskStore);
  const { avatar } = useSelector((state) => state.userStore);

  const pendingTask = task.filter((item) => item.status === "pending");
  const runningTask = task.filter((item) => item.status === "running");
  const doneTask = task.filter((item) => item.status === "done");

  return (
    <div className="h-screens grid grid-cols-12">
      <div className="lg:col-span-9 col-span-12 px-10 pt-10">
        <div className="flex flex-wrap gap-3 justify-between items-center">
          <div>
            <h1 className="font-semibold text-3xl">Tasks</h1>
          </div>
          <div className="flex gap-5">
            <button className="border-2 border-secondary/20 hover:border-primary hover:bg-primary rounded-xl h-10 w-10  grid place-content-center text-secondary hover:text-white transition-all">
              <MagnifyingGlassIcon className="h-6 w-6" />
            </button>
            <button className="border-2 border-secondary/20 hover:border-primary hover:bg-primary rounded-xl h-10 w-10 grid place-content-center text-secondary hover:text-white transition-all">
              <BellIcon className="h-6 w-6" />
            </button>
            <button
              className="btn btn-primary"
              onClick={() => setIsOpen(!isOpen)}
            >
              Add Task
            </button>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Add Task">
              <AdTaskForm setIsOpen={setIsOpen} />
            </Modal>
            <MenuDropdown>
              <div className="h-10 w-10 rounded-xl overflow-hidden">
                <img
                  src={
                    avatar
                      ? avatar
                      : `https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=644&q=80`
                  }
                  alt=""
                  className="object-cover h-full w-full "
                />
              </div>
            </MenuDropdown>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 mt-10">
          <div className="relative h-[550px] overflow-auto">
            <div className="flex sticky top-0 justify-between bg-[#D3DDF9] p-5 rounded-md mb-3">
              <h1>Up Next</h1>
              <p className="bg-primary text-white w-6 h-6 grid place-content-center rounded-md">
                {pendingTask?.length}
              </p>
            </div>
            <div className="space-y-3">
              {pendingTask.map((item) => (
                <TaskCard key={item?.id} task={item} />
              ))}
            </div>
          </div>
          <div className="relative h-[550px] overflow-auto">
            <div className="flex sticky top-0 justify-between bg-[#D3DDF9] p-5 rounded-md mb-3">
              <h1>In Progress</h1>
              <p className="bg-primary text-white w-6 h-6 grid place-content-center rounded-md">
                {runningTask.length}
              </p>
            </div>
            <div className="space-y-3">
              {runningTask.map((item) => (
                <TaskCard key={item?.id} task={item} />
              ))}
            </div>
          </div>
          <div className="relative h-[550px] overflow-auto">
            <div className="flex sticky top-0 justify-between bg-[#D3DDF9] p-5 rounded-md mb-3">
              <h1>Done</h1>
              <p className="bg-primary text-white w-6 h-6 grid place-content-center rounded-md">
                {doneTask.length}
              </p>
            </div>
            <div className="space-y-3">
              {doneTask.map((item) => (
                <TaskCard key={item?.id} task={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="lg:col-span-3 col-span-12 border-l-2 border-secondary/20 px-10 pt-10">
        <div>
          <h1 className="text-xl">Members</h1>
          <div className="flex gap-3 mt-3">
            <div className="h-10 w-10 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt=""
                className="object-cover h-full w-full "
              />
            </div>
            <div className="h-10 w-10 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt=""
                className="object-cover h-full w-full "
              />
            </div>
            <div className="h-10 w-10 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt=""
                className="object-cover h-full w-full "
              />
            </div>
            <div className="h-10 w-10 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt=""
                className="object-cover h-full w-full "
              />
            </div>
            <div className="h-10 w-10 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt=""
                className="object-cover h-full w-full "
              />
            </div>
          </div>
        </div>
        <MyTasks />
      </div>
    </div>
  );
};

export default Tasks;
