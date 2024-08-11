import { useLoaderData } from "react-router-dom";
import TakeAssignmentModel from "../../componants/TakeAssignmentModel/TakeAssignmentModel";

const AssignmentsDetails = () => {
  const assignmentDetails = useLoaderData();
  const {
    _id,
    assignment_title,
    assignment_description,
    assignment_due_date,
    assignment_total_mark,
    difficulty_label,
    thumbnail_url,
    user_email,
  } = assignmentDetails;

  const getDate = () => {
    const currentDate = new Date(assignment_due_date);
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return `${currentDate.getDate()} ${
      months[currentDate.getMonth()]
    } ${currentDate.getFullYear()}`;
  };
  return (
    <div className="container mx-auto px-2 flex flex-col items-center">
      {/* --------image------- */}
      <div className="h-64 w-full md:w-[600px]">
        <img
          src={thumbnail_url}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      {/* -----------Details---------- */}
      <div className="text-center grid grid-cols-1 md:grid-cols-4 my-6 gap-6">
        <div className=" md:col-span-3 border border-gray-600 shadow-md shadow-gray-600 rounded-lg p-6">
          <h3 className="text-4xl font-semibold font-teachers my-6">
            {assignment_title}
          </h3>
          <p className="dark:text-gray-300 text-gray-700">
            {assignment_description}
          </p>
        </div>
        <div className="border border-gray-600 shadow-md shadow-gray-600 rounded-lg p-6 text-left flex flex-col justify-between gap-3">
          <div>
            <p>
              <span className="dark:text-gray-400 text-gray-500">
                Total Mark:{" "}
              </span>
              {assignment_total_mark}
            </p>
            <p>
              <span className="dark:text-gray-400 text-gray-500">
                {" "}
                Difficulty label:{" "}
              </span>
              {difficulty_label === "easy" && (
                <span className="text-green-600 font-semibold">Easy</span>
              )}
              {difficulty_label === "medium" && (
                <span className="text-yellow-500 font-semibold">Medium</span>
              )}
              {difficulty_label === "hard" && (
                <span className="text-red-500 font-semibold">Hard</span>
              )}
            </p>
            <p className="">
              <span className="dark:text-gray-400 text-gray-500">
                Last Date:{" "}
              </span>
              <span className="text-nowrap">{getDate()}</span>
            </p>
          </div>

          <button
            className="btn w-full btn-outline hover:text-white dark:border-secoundry dark:text-secoundry  border-primary text-primary hover:bg-primary hover:border-primary"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            Take Assignment
          </button>

          <TakeAssignmentModel assignment={assignmentDetails} />
        </div>
      </div>
    </div>
  );
};

export default AssignmentsDetails;
