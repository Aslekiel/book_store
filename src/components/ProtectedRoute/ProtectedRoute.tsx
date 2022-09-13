import { Navigate } from 'react-router-dom';

type ProtectedRouteType = {
  isToken: string | null;
  redirectPath: string;
  children: JSX.Element;
};

export const ProtectedRoute: React.FC<ProtectedRouteType> = ({
  isToken, redirectPath, children }) => {
  if (!isToken) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};
