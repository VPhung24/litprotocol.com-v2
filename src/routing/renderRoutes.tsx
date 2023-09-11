import { Suspense, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { privateRoutes, publicRoutes, IRoutes } from './';
import { redirectRoutes } from './routes';

interface IRoutesRendering {
  routes: IRoutes;
}

const RoutesRendering = (props: IRoutesRendering) => {
  const { routes } = props;

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    redirectRoutes.forEach(route => {
      if (location.pathname === route.path) {
        window.location.href = route.to;
      }
    });

    if (location.pathname === '/') {
      const defaultRoute = routes.find(route => route.default);
      if (defaultRoute) {
        navigate(defaultRoute.path || '/404', { replace: true });
      }
    }
  }, [location.pathname]);

  return (
    <Routes>
      {routes.map(route => (
        <Route
          key={route.path}
          path={route.path || ''}
          element={
            <Suspense fallback={null}>
              <route.component />
            </Suspense>
          }
        />
      ))}
    </Routes>
  );
};

export const renderPrivateRoutes = () => (
  <RoutesRendering routes={privateRoutes} />
);
export const renderPublicRoutes = () => (
  <RoutesRendering routes={publicRoutes} />
);
