import { useContext } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { AuthContext } from "../../context/AuthContext";

export default function Assignment({ assignment, handleDelete }) {
  const { user } = useContext(AuthContext);
  const {
    _id,
    thumbnail_url,
    assignment_total_mark,
    difficulty_label,
    assignment_title,
    user_email,
  } = assignment;

  return (
    <div className="card card-side dark:bg-base-100 shadow-lg border border-gray-300 dark:border-gray-600 dark:shadow-gray-600 shadow-gray-300 p-3 rounded-lg items-center gap-3">
      <figure className="w-24 h-24 rounded-lg">
        <img
          src={
            thumbnail_url
              ? thumbnail_url
              : "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
          }
          alt="Movie"
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body p-0">
        <h2 className="card-title flex justify-between font-teachers">
          {assignment_title}
          {difficulty_label === "easy" && (
            <span className="text-green-600 font-semibold">Easy</span>
          )}
          {difficulty_label === "medium" && (
            <span className="text-yellow-500 font-semibold">Medium</span>
          )}
          {difficulty_label === "hard" && (
            <span className="text-red-500 font-semibold">Hard</span>
          )}
        </h2>

        <p>Total Mark: {assignment_total_mark}</p>

        <div className="card-actions justify-end flex-nowrap">
          <a
            data-tooltip-id="my-tooltip"
            data-tooltip-content="my-tooltip"
            data-tooltip-place="bottom"
          ></a>
          {user_email === user?.email && (
            <button
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Delete"
              className="btn btn-circle btn-outline hover:bg-red-600 hover:text-white"
              onClick={() => handleDelete(_id)}
            >
              <AiOutlineDelete className="text-2xl" />
            </button>
          )}
          {user_email === user?.email && (
            <Link to={`/update-assignment/${_id}`}>
              <button
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Edit"
                className="btn btn-circle btn-outline hover:bg-primary hover:text-white"
              >
                <MdEdit className="text-2xl" />
              </button>
            </Link>
          )}
          <Link to={`/assignments/${_id}`}>
            <button className="btn btn-outline hover:text-white dark:border-secoundry dark:text-secoundry  border-primary text-primary hover:bg-primary hover:border-primary">
              Details
            </button>
          </Link>
        </div>
      </div>
      <Tooltip id="my-tooltip" />
    </div>
  );
}
