import axios from "axios";
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthContext";

const TakeAssignmentModel = ({ assignment }) => {
  const { user } = useContext(AuthContext);
  const handleAssignmentSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const pdf_link = form.pdf_link.value;
    const quick_notes = form.quick_notes.value;
    const { _id, ...otherInfo } = assignment;
    const submission = {
      pdf_link,
      quick_notes,
      status: "pending",
      student_email: user.email,
      student_name: user.displayName,
      ...otherInfo,
    };
    const res = await axios.post(
      `${import.meta.env.VITE_API_URL}/assignment-submition`,
      submission,
      { withCredentials: true }
    );

    form.reset();
    document.getElementById("closeModelBtn").click();
    Swal.fire({
      title: "Success!!",
      text: "Assignment submited successfully!",
      icon: "success",
    });
  };

  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box bg-white dark:bg-base-100 scroll-none">
        <h3 className="font-bold text-2xl text-center font-teachers">
          Submit Assignment
        </h3>
        <p className="my-4">Submit your assignment with PDF link.</p>
        <div className="modal-action block m-0">
          <form action="" onSubmit={handleAssignmentSubmit}>
            {/* ------------PDF Link----------- */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">PDF Link</span>
              </label>
              <input
                type="text"
                placeholder="PDF Link"
                name="pdf_link"
                // value={assignment.assignment_total_mark}
                // onChange={handleChange}
                className="input input-bordered bg-transparent focus:outline-gray-600 dark:focus:outline-secoundry border-gray-400 "
                required
              />
            </div>
            {/* --------Quick Note------- */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Quick Note</span>
              </label>
              <textarea
                className="textarea h-24 bg-transparent focus:outline-gray-600 dark:focus:outline-secoundry border-gray-400"
                name="quick_notes"
                // value={assignment.assignment_description}
                // onChange={handleChange}
                placeholder="Notes..."
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

export default TakeAssignmentModel;
