import axios from "axios";
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthContext";

const GiveNumberModel = ({ assignment }) => {
  const { user } = useContext(AuthContext);
  const handleGiveMark = async (e) => {
    e.preventDefault();
    const form = e.target;
    const given_mark = form.given_mark.value;
    const feed_back = form.feed_back.value;
    const submission = {
      status: "completed",
      given_mark: given_mark,
      feed_back: feed_back,
    };
    const res = await axios.patch(
      `${import.meta.env.VITE_API_URL}/submissions/${assignment._id}`,
      submission,
      {
        withCredentials: true,
      }
    );
    if (res.data.modifiedCount > 0) {
      form.reset();
      document.getElementById("closeModelBtn").click();
      Swal.fire({
        title: "Success!!",
        text: "Assignment submited successfully!",
        icon: "success",
      });
    }
  };

  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box bg-white dark:bg-base-100 scroll-none">
        <h3 className="font-bold text-2xl text-center font-teachers">
          Assignment Marking
        </h3>
        <div className="modal-action block m-0">
          <form action="" onSubmit={handleGiveMark}>
            {/* ------------PDF Link----------- */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Mark</span>
              </label>
              <input
                type="text"
                placeholder="Mark"
                name="given_mark"
                // value={assignment.assignment_total_mark}
                // onChange={handleChange}
                className="input input-bordered bg-transparent focus:outline-gray-600 dark:focus:outline-secoundry border-gray-400 "
                required
              />
            </div>
            {/* --------Quick Note------- */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Feedback</span>
              </label>
              <textarea
                className="textarea h-24 bg-transparent focus:outline-gray-600 dark:focus:outline-secoundry border-gray-400"
                name="feed_back"
                // value={assignment.assignment_description}
                // onChange={handleChange}
                placeholder="You Feedback"
                required
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Submit</button>
            </div>
          </form>
          <form method="dialog" className="dialog-ml-0 my-3">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-error w-full" id="closeModelBtn">
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default GiveNumberModel;
