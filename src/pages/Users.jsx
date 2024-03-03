import { useGetUserQuery } from "../redux/features/api/testAPI";

const Users = () => {
  const { data, isLoading } = useGetUserQuery();

  return (
    <div className="users grid lg:grid-cols-4 grid-cols-1 gap-5 my-8 mx-5">
      {!isLoading
        ? data.map((item) => {
            // console.log(item);
            return (
              <div
                className="p-5 rounded-md bg-slate-600 text-white"
                key={item.id}
              >
                Name: {item.name}
                <br />
                Email: {item.email}
                <br />
                Phone: {item.phone}
                <br />
                Websites: {item.website}
              </div>
            );
          })
        : "Loading"}
    </div>
  );
};

export default Users;
