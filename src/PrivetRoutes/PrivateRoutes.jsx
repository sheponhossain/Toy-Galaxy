import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../Routes/AuthProvider';
import { use } from 'react';

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();

  if (loading) return <div>Loading...</div>;

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
