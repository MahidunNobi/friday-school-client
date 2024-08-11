import axios from "axios";
import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthContext";
const CreateAssignment = () => {
  const { user } = useContext(AuthContext);
  const [assignment, setAssignment] = useState({
    assignment_title: "",
    assignment_total_mark: "",
    assignment_description: "",
    thumbnail_url: "",
    difficulty_label: "easy",
    assignment_due_date: new Date(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAssignment({ ...assignment, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post(
      `${import.meta.env.VITE_API_URL}/assignments`,
      {
        ...assignment,
        user_email: user.email,
      }
    );
    if (res.data.insertedId) {
      Swal.fire({
        title: "Success!!",
        text: "Assignment created successfully!",
        icon: "success",
      });
      setAssignment({
        assignment_title: "",
        assignment_total_mark: "",
        assignment_description: "",
        thumbnail_url: "",
        difficulty_label: "easy",
        assignment_due_date: new Date(),
      });
    }
  };

  return (
    <div className="container mx-auto">
      <div className="">
        <div className="">
          <div className="hero min-h-screen ">
            <div className="hero-content flex-col w-full">
              <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Create an assignment</h1>
              </div>
              <div className="card shrink-0 w-full max-w-lg border border-gray-400 dark:border-secoundry shadow-lg shadow-gray-600 dark:shadow-secoundry ">
                <form className="card-body" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {/* ----------Title--------- */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Title</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Assignment title"
                        name="assignment_title"
                        value={assignment.assignment_title}
                        onChange={handleChange}
                        className="input input-bordered bg-transparent focus:outline-gray-600 dark:focus:outline-secoundry border-gray-400 "
                        required
                      />
                    </div>
                    {/* ------------Mark----------- */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Mark</span>
                      </label>
                      <input
                        type="number"
                        placeholder="Assignment Mark"
                        name="assignment_total_mark"
                        value={assignment.assignment_total_mark}
                        onChange={handleChange}
                        className="input input-bordered bg-transparent focus:outline-gray-600 dark:focus:outline-secoundry border-gray-400"
                        required
                      />
                    </div>
                    {/* --------Assignment-description------- */}
                    <div className="form-control md:col-span-2">
                      <label className="label">
                        <span className="label-text">
                          Assignment Description
                        </span>
                      </label>
                      <textarea
                        className="textarea h-24 bg-transparent focus:outline-gray-600 dark:focus:outline-secoundry border-gray-400"
                        name="assignment_description"
                        value={assignment.assignment_description}
                        onChange={handleChange}
                        placeholder="Assignment description"
                        required
                      ></textarea>
                    </div>

                    {/* ---------Thumbnail URL---------- */}
                    <div className="form-control md:col-span-2">
                      <label className="label">
                        <span className="label-text">Thumbnail URL</span>
                      </label>
                      <input
                        type="url"
                        placeholder="Link to the Thumbnail"
                        name="thumbnail_url"
                        value={assignment.thumbnail_url}
                        onChange={handleChange}
                        className="input input-bordered bg-transparent focus:outline-gray-600 dark:focus:outline-secoundry border-gray-400 "
                        required
                      />
                    </div>
                    {/* ----------Difficulty label--------- */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Difficulty Label</span>
                      </label>
                      <select
                        className="select select-primary w-full max-w-xs bg-transparent focus:outline-gray-600 dark:focus:outline-secoundry border-gray-400 dark:*:bg-gray-600"
                        required
                        name="difficulty_label"
                        value={assignment.difficulty_label}
                        onChange={handleChange}
                      >
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                      </select>
                    </div>
                    {/* ----------Due date--------- */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Due Date</span>
                      </label>
                      <DatePicker
                        selected={assignment.assignment_due_date}
                        className="input bg-transparent focus:outline-gray-600 dark:focus:outline-secoundry border-gray-400 "
                        name="assignment_due_date"
                        onChange={(date) =>
                          setAssignment({
                            ...assignment,
                            assignment_due_date: date,
                          })
                        }
                      />
                    </div>
                  </div>

                  <div className="form-control mt-6">
                    <button className="btn btn-primary">Create</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAssignment;
