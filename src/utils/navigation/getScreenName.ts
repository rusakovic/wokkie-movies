import {
  RouteProp,
  ParamListBase,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import {Routes} from 'routes/routes';

export const getHeaderTitle = (
  route: RouteProp<ParamListBase, Routes.RootStack>,
) => {
  const routeName = getFocusedRouteNameFromRoute(route);
  switch (routeName) {
    case Routes.FilmGenresScreen:
      return 'Wookie Movies';

    case Routes.SearchFilmScreen:
      return 'Search movies';

    default:
      return 'Wookie Movies';
  }
};
