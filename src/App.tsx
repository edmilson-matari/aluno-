// src/App.tsx
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './components/ui/ProtectedRoute';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';        // corrigido
import Dashboard from './pages/Dashboards';  // corrigido (assumindo nome correto)
import ProjectForm from './pages/ProjectsForm'; //
import AdminDashboard from './pages/AdmiDashboard';
import AdminProjectDetail from './pages/AdminProjectsDetails';

const router = createBrowserRouter([
  // Rotas públicas (não autenticadas)
  {
    path: '/',
    element: <LandingPage/>
  },
  {
    path: '/signin',
    element: <SignIn />,
  },
  {
    path: '/signup', // ou '/registar' se preferir em português
    element: <SignUp />,
  },
  {
  path: '/admin',
  element: <AdminDashboard />,
},
{
  path: '/admin/project/:projectId',
  element: <AdminProjectDetail />,
},

  // Rotas protegidas
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/project/novo',
        element: <ProjectForm />,
      },
      {
        path: '/project/edit/:id',
        element: <EditProject />,
      },
    ],
  },

  // Redirecionamentos
  {
    path: '/dashboard',
    element: <ProtectedRoute />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" replace />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/dashboard" replace />,
  },
]);

// Import necessário para Navigate
import { Navigate } from 'react-router-dom';
import EditProject from './pages/EditProject';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;