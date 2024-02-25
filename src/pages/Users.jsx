import { useGetUserQuery } from "../redux/features/api/baseAPi";

const Users = () => {
  const { data, isLoading } = useGetUserQuery();

  return (
    <div className="users grid grid-cols-4 gap-5 my-8 mx-5">
      {!isLoading
        ? data.map((item) => {
            console.log(item);
            return (
              <div className="p-5 rounded-md bg-slate-600" key={item.id}>
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
