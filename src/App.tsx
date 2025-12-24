// src/App.tsx
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoute } from "./components/ui/ProtectedRoute";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import AdminDashboard from "./pages/AdmiDashboard";
import AdminProjectDetail from "./pages/AdminProjectsDetails";
import EditProject from "./pages/EditProject";
import LandingPage from "./pages/LandingPage";
import Layout from "./components/Layout";
import HomePage from "./pages/Home";
import AllProjectsSection from "./components/AllProjectsSection";
import ProjectsPage from "./components/CreateProjectModal";

const router = createBrowserRouter([
  // Rotas públicas (não autenticadas)
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup", // ou '/registar' se preferir em português
    element: <SignUp />,
  },
  {
    path: "/admin",
    element: <AdminDashboard />,
  },
  {
    path: "/admin/project/:projectId",
    element: <AdminProjectDetail />,
  },

  // Rotas protegidas
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <Layout />,
        children: [
          {
            path: '/home',
            element: <HomePage/>
          },
          {
            path: '/project',
            element: <AllProjectsSection/>
          },
          {
            path: "/project/novo",
            element: <ProjectsPage />,
          },
          {
            path: "/project/edit/:id",
            element: <EditProject />,
          },
        ],
      },
    ],
  },

  // Redirecionamentos
  // {
  //   path: "/dashboard",
  //   element: <Dashboard />,
  //   children: [
  //     {
  //       index: true,
  //       element: <Navigate to="/dashboard" replace />,
  //     },
  //   ],
  // },
  // {
  //   path: "*",
  //   element: <Navigate to="/dashboard" replace />,
  // },
]);

// Import necessário para Navigat

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
