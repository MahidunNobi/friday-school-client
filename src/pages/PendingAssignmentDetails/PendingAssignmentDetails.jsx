import { useLoaderData } from "react-router-dom";
import GiveNumberModel from "../../componants/GiveNumberModel/GiveNumberModel";

const PendingAssignmentDetails = () => {
  const submissionDetails = useLoaderData();
  const {
    _id,
    assignment_title,
    assignment_description,
    assignment_due_date,
    assignment_total_mark,
    difficulty_label,
    thumbnail_url,
    pdf_link,
    quick_notes,
    user_email,
  } = submissionDetails;

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
          <h3 className="text-3xl font-semibold font-teachers my-6 text-left">
            Student submited details:
          </h3>
          <p className="dark:text-gray-300 text-gray-700 text-left overflow-scroll scroll-none">
            PDF Link: <span className=""> {pdf_link} </span>
          </p>
          <p className="dark:text-gray-300 text-gray-700 text-left scroll-none">
            Quick Notes: {quick_notes}
          </p>
          PDF Live:
          <iframe className="w-full" src={pdf_link}></iframe>
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
            Give mark
          </button>

          <GiveNumberModel assignment={submissionDetails} />
        </div>
      </div>
    </div>
  );
};

export default PendingAssignmentDetails;
