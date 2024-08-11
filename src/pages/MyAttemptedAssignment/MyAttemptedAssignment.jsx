import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function MyAttemptedAssignment() {
  const [submissions, setSubmissions] = useState([]);
  const { user } = useContext(AuthContext);
  const fetchData = async () => {
    const res = await axios(
      `${import.meta.env.VITE_API_URL}/my-submited-assignments/${user.email}`,
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
              <th>Title</th>
              <th>Status</th>
              <th>Mark</th>
              <th>Feedback</th>
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
                <td>
                  {sub.status === "pending" && (
                    <div className="badge badge-outline bg-yellow-500/5 border-none text-yellow-600">
                      Pending
                    </div>
                  )}
                  {sub.status === "completed" && (
                    <div className="badge badge-outline bg-green-500/5 border-none text-green-600">
                      Completed
                    </div>
                  )}
                </td>
                <td>
                  {sub.given_mark ? sub.given_mark : "0"} Out of{" "}
                  {sub.assignment_total_mark}
                </td>
                <td>{sub.feed_back ? sub.feed_back : "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
