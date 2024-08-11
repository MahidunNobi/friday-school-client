import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "../componants/ProtectedRoute/ProtectedRoute";
import MainLayout from "../layouts/MainLayout";
import Assignments from "../pages/Assignments/Assignments";
import AssignmentsDetails from "../pages/AssignmentsDetails/AssignmentsDetails";
import CreateAssignment from "../pages/CreateAssignment/CreateAssignment";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import MyAttemptedAssignment from "../pages/MyAttemptedAssignment/MyAttemptedAssignment";
import PendingAssignmentDetails from "../pages/PendingAssignmentDetails/PendingAssignmentDetails";
import PendingAssignments from "../pages/PendingAssignments/PendingAssignments";
import Register from "../pages/Register/Register";
import UpdateAssignment from "../pages/UpdateAssignment/UpdateAssignment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Register />,
      },
      {
        path: "/create-assignment",
        element: (
          <ProtectedRoute>
            <CreateAssignment />
          </ProtectedRoute>
        ),
      },
      {
        path: "/update-assignment/:id",
        element: <UpdateAssignment />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/assignments/${params.id}`),
      },
      {
        path: "assignments",
        element: <Assignments />,
      },
      {
        path: "/assignments/:id",
        element: (
          <ProtectedRoute>
            <AssignmentsDetails />
          </ProtectedRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/assignments/${params.id}`),
      },
      {
        path: "/my-pending-assignments",
        element: (
          <ProtectedRoute>
            <PendingAssignments />
          </ProtectedRoute>
        ),
      },
      {
        path: "/my-pending-assignments/:id",
        element: (
          <ProtectedRoute>
            <PendingAssignmentDetails />
          </ProtectedRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/submissions/${params.id}`, {
            credentials: "include",
          }),
      },
      {
        path: "/my-submited-assignments",
        element: (
          <ProtectedRoute>
            <MyAttemptedAssignment />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
