import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const PendingAssignments = () => {
  const [submissions, setSubmissions] = useState([]);
  const { user } = useContext(AuthContext);
  const fetchData = async () => {
    const res = await axios(
      `${import.meta.env.VITE_API_URL}/my-pending-assignments/${user.email}`,
      { withCredentials: true }
    );
    setSubmissions(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-2">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="*:text-gray-600 dark:*:text-gray-400 border-gray-300 dark:border-gray-800">
              <th></th>
              <th>Name</th>
              <th>Total Mark</th>
              <th>Student</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {submissions.map((sub) => (
              <tr
                key={sub._id}
                className="dark:bg-base-200 border-gray-300 dark:border-gray-800"
              >
                <th>1</th>
                <td>{sub.assignment_title}</td>
                <td>{sub.assignment_total_mark}</td>
                <td> {sub.student_name ? sub.student_name : "N/A"}</td>
                <td>
                  <Link to={`/my-pending-assignments/${sub._id}`}>
                    <button className="btn btn-outline hover:text-white dark:border-secoundry dark:text-secoundry  border-primary text-primary hover:bg-primary hover:border-primary">
                      Give Mark
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PendingAssignments;
