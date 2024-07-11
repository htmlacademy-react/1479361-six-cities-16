import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAuth } from '../../hooks';

type privateRouteProps = {
  requareAuth: boolean;
  redirectTo: AppRoute;
  children: JSX.Element;
}

const PrivateRoute = (props: privateRouteProps) => {
  const { requareAuth, redirectTo, children} = props;
  const isAuthendicated = useAuth(AuthorizationStatus.Auth);

  if(isAuthendicated === requareAuth){
    return children;
  }
  return <Navigate to={redirectTo}/>;
};

export default PrivateRoute;
