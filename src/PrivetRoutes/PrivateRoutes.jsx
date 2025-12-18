import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const user = { name: 'Test User', email: 'user@test.com' };
  const location = useLocation();

  const loading = false;

  if (loading) return <div>Loading...</div>;

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
