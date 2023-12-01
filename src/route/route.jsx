
import { useRoutes } from 'react-router-dom';
import HomeScreen from '../pages/home';
import ProfileScreen from '../pages/profile';

export default function Router() {
  const routes = useRoutes([
    {
      path: "home",
      element: <HomeScreen />
    },
    {
      path: "profile",
      element: <ProfileScreen />
    },
  ]);

  return routes;
}