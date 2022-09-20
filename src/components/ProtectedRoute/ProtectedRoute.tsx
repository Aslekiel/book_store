import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks/hooks';

type ProtectedRouteType = {
  isInit?: boolean;
  children: JSX.Element;
};

interface ILocationStateType {
  from: { pathname: string };
}

export const ProtectedRoute: React.FC<ProtectedRouteType> = ({ isInit, children }) => {
  const location = useLocation();
  const locationState = location.state as ILocationStateType;
  const from = locationState?.from?.pathname || '/';

  const user = useAppSelector((state) => state.user.user?.email);

  if (!isInit) {
    if (!user) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
  }

  if (user) {
    return <Navigate to={from} state={{ from: location }} replace />;
  }

  return children;
};
