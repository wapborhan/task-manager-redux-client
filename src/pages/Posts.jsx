import { useGetPostQuery } from "../redux/features/api/baseAPi";
import { NavLink } from "react-router-dom";

const Posts = () => {
  const { data, isLoading } = useGetPostQuery();

  if (isLoading) {
    return <span>Loading....</span>;
  }

  return (
    <div className="h-screen grid grid-cols-12">
      <div className="col-span-12 lg:px-10 px-3 pt-10">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-semibold text-3xl">Post</h1>
          </div>
          <div className="flex gap-5">
            <div className="h-10 w-10 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=644&q=80"
                alt=""
                className="object-cover h-full w-full "
              />
            </div>
          </div>
        </div>
        <div className="posts grid lg:grid-cols-3 gap-4 flex-wrap my-8">
          {data.map((item) => {
            return (
              <NavLink
                to={`/post/${item.id}`}
                key={item.id}
                className="p-5 bg-slate-700 text-white rounded-md"
              >
                {item.title}
                <hr className="my-5" />
                {item.body}
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Posts;
