import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Assignment from "../../componants/Assignment/Assignment";

const Assignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [difficultyLabel, setDifficultyLabel] = useState("");

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axios.delete(
          `${import.meta.env.VITE_API_URL}/assignments/${id}`,
          { withCredentials: true }
        );
        if (res.data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          setAssignments(assignments.filter((ass) => ass._id !== id));
        }
      }
    });
  };
  const fetchAssignments = async () => {
    const url =
      difficultyLabel === ""
        ? `${import.meta.env.VITE_API_URL}/assignments`
        : `${
            import.meta.env.VITE_API_URL
          }/assignments?difficulty_label=${difficultyLabel}`;

    const res = await axios(url);
    setAssignments(res.data);
  };
  useEffect(() => {
    fetchAssignments();
  }, [difficultyLabel]);
  return (
    <div className="container mx-auto px-2">
      <div className="text-center my-6">
        <h1 className="text-5xl font-bold font-teachers">Assignments</h1>
      </div>
      <div className="my-6">
        {/* ----------Difficulty label--------- */}
        <div className="form-control flex-row justify-end">
          <label className="label">
            <span className="label-text text-gray-600 dark:text-gray-300 font-bold">
              Sort By Difficulty Label
            </span>
          </label>
          <select
            className="select select-primary w-full max-w-xs bg-transparent focus:outline-gray-600 dark:focus:outline-secoundry border-gray-400 dark:*:bg-gray-600"
            required
            name="difficulty_label"
            value={difficultyLabel}
            onChange={(e) => setDifficultyLabel(e.target.value)}
          >
            <option value="">Select</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {assignments.map((assignment) => (
          <Assignment
            key={assignment._id}
            assignment={assignment}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Assignments;
