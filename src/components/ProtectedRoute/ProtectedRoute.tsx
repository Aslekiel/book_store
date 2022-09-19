import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks/hooks';

type ProtectedRouteType = {
  redirectPath: string;
  children: JSX.Element;
};

export const ProtectedRoute: React.FC<ProtectedRouteType> = ({
  redirectPath, children }) => {
  const location = useLocation();
  const user = useAppSelector((state) => state.user.user?.email);

  if (!user) {
    return <Navigate to={redirectPath} state={{ path: location.pathname }} />;
  }

  return children;
};
