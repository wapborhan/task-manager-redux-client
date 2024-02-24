import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/tasks/taskSlice";

const AdTaskForm = ({ setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const onCancle = () => {
    reset();
    setIsOpen(false);
  };

  const onSubmit = (data) => {
    dispatch(addTask(data));
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
            {...register("title")}
            className="w-full rounded-md"
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            Description
          </label>
          <textarea
            type="text"
            id="description"
            {...register("description")}
            className="w-full rounded-md"
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            Deadline
          </label>
          <input
            type="date"
            id="deadline"
            {...register("deadline")}
            className="w-full rounded-md"
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            Assign To
          </label>
          <select
            id="priority"
            {...register("assignTo")}
            className="w-full rounded-md"
          >
            <option defaultValue value="Borhan Uddin">
              Borhan Uddin
            </option>
            <option value="Zihad Biswas">Zihad Biswas</option>
            <option value="Rabby Biswas">Rabby Biswas</option>
          </select>
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            Priority
          </label>
          <select
            id="priority"
            {...register("priority")}
            className="w-full rounded-md"
          >
            <option defaultValue value="high">
              High
            </option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
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
