import { useParams } from "react-router-dom";
import { useGetPostByIdQuery } from "../redux/features/api/baseAPi";
import Loading from "../components/layouts/Loading";

const PostDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetPostByIdQuery(id);
  // console.log(data);
  return (
    <div className="container mx-auto px-10 py-10">
      {!isLoading ? (
        <div key={data?.id} className="p-5 bg-slate-700 text-white rounded-md">
          {data?.title}
          <hr className="my-5" />
          {data?.body}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default PostDetails;
