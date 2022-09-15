import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks/hooks';

type ProtectedRouteType = {
  redirectPath: string;
  auth: boolean;
  children: JSX.Element;
};

export const ProtectedRoute: React.FC<ProtectedRouteType> = ({
  redirectPath, auth, children }) => {
  const user = useAppSelector((state) => state.user.email);

  if (!user && !auth) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};
