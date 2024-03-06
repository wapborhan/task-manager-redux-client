import { useForm } from "react-hook-form";
import { useAddTaskMutation } from "../../redux/features/tasks/taskApi";
import { toast } from "react-hot-toast";
import { useEffect } from "react";

const AdTaskForm = ({ setIsOpen }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [setTask, { data, error }] = useAddTaskMutation();

  const onCancle = () => {
    reset();
    setIsOpen(false);
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  useEffect(() => {
    if (data?.acknowledged === true) {
      toast.success("Task Added.");
    }
  }, [data]);

  const onSubmit = (data) => {
    setTask({ ...data, status: "pending" });

    onCancle();
  };

  return (
    <div className="form mt-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            {...register("title", { required: true })}
            className="w-full rounded-md"
          />
          {errors.title && (
            <span className="text-red-500">* This field is required</span>
          )}
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            Description
          </label>
          <textarea
            type="text"
            id="description"
            {...register("description", { required: true })}
            className="w-full rounded-md"
          />
          {errors.description && (
            <span className="text-red-500">* This field is required</span>
          )}
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            Deadline
          </label>
          <input
            type="date"
            id="deadline"
            {...register("deadline", { required: true })}
            className="w-full rounded-md"
          />
          {errors.deadline && (
            <span className="text-red-500">* This field is required</span>
          )}
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            Assign To
          </label>
          <select
            id="priority"
            {...register("assignedTo", { required: true })}
            className="w-full rounded-md"
          >
            <option defaultValue value="Borhan Uddin">
              Borhan Uddin
            </option>
            <option value="Zihad Biswas">Zihad Biswas</option>
            <option value="Rabby Biswas">Rabby Biswas</option>
          </select>{" "}
          {errors.assignedTo && (
            <span className="text-red-500">* This field is required</span>
          )}
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            Priority
          </label>
          <select
            id="priority"
            {...register("priority", { required: true })}
            className="w-full rounded-md"
          >
            <option defaultValue value="high">
              High
            </option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>{" "}
          {errors.priority && (
            <span className="text-red-500">* This field is required</span>
          )}
        </div>
        <div className="flex gap-3 justify-end">
          <button onClick={onCancle} value="Add" className="btn btn-danger">
            Cancel
          </button>
          <button type="submit" value="Add" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdTaskForm;
