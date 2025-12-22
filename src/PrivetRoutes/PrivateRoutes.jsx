import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../Routes/AuthProvider';
import { use } from 'react';
import { TailSpin } from 'react-loader-spinner';

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();

  if (loading)
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
        <TailSpin></TailSpin>
      </div>
    );

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
